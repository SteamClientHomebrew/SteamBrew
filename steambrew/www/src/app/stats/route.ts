import fs from 'fs';
import os from 'os';

export const dynamic = 'force-dynamic';

const LOG_FILES = {
	www: '/var/log/nginx/steambrew.log',
	docs: '/var/log/nginx/steambrew-docs.log',
};

interface Entry {
	msec: number;
	bytes: number;
	status: number;
}

function parseLog(path: string): Entry[] {
	try {
		const now = Date.now() / 1000;
		const cutoff = now - 86400;
		return fs
			.readFileSync(path, 'utf8')
			.split('\n')
			.flatMap((line) => {
				const [msecStr, bytesStr, statusStr] = line.split(' ');
				const msec = parseFloat(msecStr);
				if (isNaN(msec) || msec < cutoff) return [];
				return [{ msec, bytes: parseInt(bytesStr) || 0, status: parseInt(statusStr) || 0 }];
			});
	} catch {
		return [];
	}
}

function fmt(bytes: number) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
	if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
	return `${(bytes / 1024 ** 3).toFixed(2)} GB`;
}

function diskStats() {
	try {
		const stat = fs.statfsSync('/');
		const total = stat.blocks * stat.bsize;
		const free = stat.bfree * stat.bsize;
		const used = total - free;
		return { total, used, free, pct: ((used / total) * 100).toFixed(1) };
	} catch {
		return null;
	}
}

function systemStats() {
	const totalMem = os.totalmem();
	const freeMem = os.freemem();
	const usedMem = totalMem - freeMem;
	const memPct = ((usedMem / totalMem) * 100).toFixed(1);
	const [load1, load5, load15] = os.loadavg();
	const cpuCount = os.cpus().length;
	const cpuPct = Math.min((load1 / cpuCount) * 100, 100).toFixed(1);
	const disk = diskStats();
	return { totalMem, usedMem, memPct, load1, load5, load15, cpuCount, cpuPct, disk };
}

// keep in sync with the OnCalendar= line in steambrew-www-swap.timer on the server
const RESTART_HOUR_UTC = 4;
const RESTART_MINUTE_UTC = 17;
const LOCAL_TZ = 'America/Halifax';

function formatUtc(date: Date) {
	return date
		.toISOString()
		.replace('T', ' ')
		.replace(/\.\d+Z$/, ' UTC');
}

function formatLocal(date: Date) {
	return `${date.toLocaleString('en-US', { timeZone: LOCAL_TZ, dateStyle: 'medium', timeStyle: 'medium' })} (${LOCAL_TZ})`;
}

function formatDuration(totalSeconds: number) {
	const d = Math.floor(totalSeconds / 86400);
	const h = Math.floor((totalSeconds % 86400) / 3600);
	const m = Math.floor((totalSeconds % 3600) / 60);
	const s = Math.floor(totalSeconds % 60);
	return [d && `${d}d`, (d || h) && `${h}h`, (d || h || m) && `${m}m`, `${s}s`].filter(Boolean).join(' ');
}

function nextScheduledRestart(now: Date) {
	const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), RESTART_HOUR_UTC, RESTART_MINUTE_UTC, 0));
	if (next.getTime() <= now.getTime()) {
		next.setUTCDate(next.getUTCDate() + 1);
	}
	return next;
}

export function GET() {
	const now = Date.now() / 1000;
	const www = parseLog(LOG_FILES.www);
	const docs = parseLog(LOG_FILES.docs);
	const all = [...www, ...docs];

	const last60s = all.filter((e) => e.msec >= now - 60);
	const last1h = all.filter((e) => e.msec >= now - 3600);
	const sum = (arr: Entry[]) => arr.reduce((a, e) => a + e.bytes, 0);
	const rps = (last60s.length / 60).toFixed(2);
	const sc = (min: number, max: number) => all.filter((e) => e.status >= min && e.status < max).length;
	const sys = systemStats();

	const nowDate = new Date(now * 1000);
	const startedAt = new Date(now * 1000 - process.uptime() * 1000);
	const nextRestart = nextScheduledRestart(nowDate);

	const text = `steambrew.app — live stats
updated ${new Date().toUTCString()}

process
  uptime                 ${formatDuration(process.uptime())}
  started                ${formatUtc(startedAt)}
                          ${formatLocal(startedAt)}
  next restart           ${formatUtc(nextRestart)}
                          ${formatLocal(nextRestart)}  (±5m jitter)

server
  cpu                   ${sys.cpuPct}% (${sys.cpuCount} cores, load ${sys.load1.toFixed(2)} / ${sys.load5.toFixed(2)} / ${sys.load15.toFixed(2)})
  memory                ${fmt(sys.usedMem)} / ${fmt(sys.totalMem)} (${sys.memPct}%)
  disk                  ${sys.disk ? `${fmt(sys.disk.used)} / ${fmt(sys.disk.total)} (${sys.disk.pct}%)` : 'unavailable'}

requests
  per second (60s avg)  ${rps}
  last minute           ${last60s.length}
  last hour             ${last1h.length}
  last 24h              ${all.length}

bandwidth sent
  last minute           ${fmt(sum(last60s))}
  last hour             ${fmt(sum(last1h))}
  last 24h              ${fmt(sum(all))}

status codes (last 24h)
  2xx                   ${sc(200, 300)}
  3xx                   ${sc(300, 400)}
  4xx                   ${sc(400, 500)}
  5xx                   ${sc(500, 600)}

by site (last 24h)
  steambrew.app         ${www.length}
  docs.steambrew.app    ${docs.length}
`;

	return new Response(text, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			Refresh: '1',
			'Cache-Control': 'no-store',
		},
	});
}
