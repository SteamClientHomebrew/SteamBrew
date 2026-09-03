'use client';

import { useEffect, useState } from 'react';
import { API_URL } from '../utils/globals';

const STARS_CACHE_KEY = 'millennium-github-stars';
const STARS_CACHE_TTL = 60 * 60 * 1000;

const readCachedStars = (): number | null => {
	try {
		const raw = localStorage.getItem(STARS_CACHE_KEY);
		if (!raw) return null;

		const { value, timestamp } = JSON.parse(raw);
		if (typeof value !== 'number' || typeof timestamp !== 'number' || Date.now() - timestamp > STARS_CACHE_TTL) {
			return null;
		}

		return value;
	} catch {
		return null;
	}
};

const writeCachedStars = (value: number) => {
	try {
		localStorage.setItem(STARS_CACHE_KEY, JSON.stringify({ value, timestamp: Date.now() }));
	} catch {}
};

function RenderHeader() {
	const [stars, setStars] = useState<number | null>(null);

	useEffect(() => {
		const cached = readCachedStars();
		if (cached !== null) {
			setStars(cached);
			return;
		}

		fetch(`${API_URL}/api/millennium/stats`)
			.then((response) => response.json())
			.then((stats) => {
				if (typeof stats.stargazersCount !== 'number') {
					setStars(null);
					return;
				}

				setStars(stats.stargazersCount);
				writeCachedStars(stats.stargazersCount);
			})
			.catch(() => setStars(null));
	}, []);

	const formatStars = (count: number) => (count >= 1000 ? `${(count / 1000).toFixed(1)}k` : `${count}`);

	const NavbarItem = ({ name, url, isExternal }: { name: string; url: string; isExternal?: boolean }) => {
		return (
			<a className={`nav-item`} target={isExternal ? '_blank' : '_self'} href={url}>
				{name}
				{isExternal && (
					<svg aria-hidden="true" className="navbar_externalArrow___VWBd" height="7" viewBox="0 0 6 6" width="7">
						<path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="var(--accents-3)"></path>
					</svg>
				)}
			</a>
		);
	};

	return (
		<>
			<header id="navbar" className={`page-section flex-container align-center floating header-bar`}>
				<div className="page-section-inner">
					<div className="logo-hamburger-section">
						<a className="navbar-logo-container" href="/">
							<img loading="lazy" className="navbar-logo hide-mobile" src="https://i.imgur.com/9qYPFSA.png" />
							<img loading="lazy" className="navbar-logo small" src="https://i.imgur.com/9qYPFSA.png" />
							<div>Steam Homebrew</div>
						</a>
					</div>
					<nav id="navbar-nav-items" className="flex-container align-center" data-toggle="affix">
						<NavbarItem name="Themes" url="/themes" />
						<NavbarItem name="Plugins" url="/plugins" />
						<NavbarItem name="Documentation" url="https://docs.steambrew.app/users/" isExternal={true} />

						<a className="nav-item nav-item-github" target="_blank" rel="noreferrer" href="https://github.com/SteamClientHomebrew/Millennium" aria-label="Millennium on GitHub">
							<svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
								<path
									fill="currentColor"
									d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
								></path>
							</svg>
							<svg aria-hidden="true" className="nav-item-github-star" viewBox="0 0 16 16" width="13" height="13">
								<path
									fill="currentColor"
									d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
								></path>
							</svg>
							<span>{stars !== null ? formatStars(stars) : 'GitHub'}</span>
						</a>

						<a href="/discord">
							<button type="submit" className="btn btn-secondary">
								<svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="16" height="16">
									<path
										fillRule="evenodd"
										d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273l-1.47-1.338l-1.604-1.398l.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537c-1.336-.668-2.54-1.002-3.744-1.137c-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735c-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02c0 0 1 1.74 3.743 1.806c0 0 .4-.533.805-1.002c-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03c.33.136.66.27.93.4a8.18 8.18 0 0 0 1.8.536c.93.135 1.996.2 3.21 0c.6-.135 1.2-.267 1.8-.535c.39-.2.87-.4 1.397-.737c0 0-.6.936-2.205 1.404c.33.466.795 1 .795 1c2.744-.06 3.81-1.8 3.87-1.726c0-3.87-1.815-7.02-1.815-7.02c-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335c0 .74-.57 1.34-1.27 1.34c-.7 0-1.27-.6-1.27-1.334c0-.74.57-1.338 1.27-1.338z"
									></path>
								</svg>
								<span>Join Discord</span>
							</button>
						</a>
					</nav>
				</div>
			</header>
		</>
	);
}

export default RenderHeader;
