<template class="landingPage">
	<div class="landingPage">
		<canvas id="bgCanvas"></canvas>
		<canvas id="terrainCanvas"></canvas>
		<div class="landscape">
			<div class="landscapeItem mountains background"></div>
			<div class="landscapeItem mountains midground"></div>
			<div class="landscapeItem mountains foreground"></div>
			<div class="landscapeItem trees background"></div>
			<div class="landscapeItem trees midground"></div>
			<div class="landscapeItem trees foreground"></div>
		</div>
	</div>
</template>
<style>
html:not(.dark) .landingPage {
	display: none;
}

.landingPage {
	display: block;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
	background-color: black;
}

.dark .VPHomeHero .VPButton.alt {
	background: #28282896 !important;
	backdrop-filter: blur(34px) !important;
}
.dark .VPFeature {
	background: #0000005c !important;
	backdrop-filter: blur(34px);
}
.VPFooter {
	background: unset !important;
}
canvas {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
}
.landscape {
	bottom: 0;
}
.landscape,
.landscape .landscapeItem {
	z-index: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}
.landscape .landscapeItem {
	bottom: -100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 50%;
	transition: bottom 1s cubic-bezier(0.33, 0, 0, 1);
}
.landscape .landscapeItem.animateIn {
	bottom: 0;
}
.landscape .landscapeItem.animateOut {
	bottom: -100%;
}
.landscape .landscapeItem.mountains.background {
	transition: 1s cubic-bezier(0.33, 0, 0, 1);
	bottom: 0;
	opacity: 0;
	z-index: 1;
	background-color: transparent;
}
.landscape .landscapeItem.mountains.background.animateIn {
	opacity: 0.6;
	background-blend-mode: lighten;
	background-color: rgba(0, 0, 0, 0.1);
}
.landscape .landscapeItem.mountains.midground {
	z-index: 2;
	background-image: url(https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/mountain4.svg);
}
.landscape .landscapeItem.mountains.foreground {
	z-index: 3;
	background-image: url(https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/mountain3.svg);
}
.landscape .landscapeItem.mountains:last-child {
	transition-delay: 0.6s;
}
.landscape .landscapeItem.mountains:nth-last-child(2) {
	transition-delay: 0.7s;
}
.landscape .landscapeItem.mountains:nth-last-child(3) {
	transition-delay: 0.8s;
}
.landscape .landscapeItem.mountains:nth-last-child(4) {
	transition-delay: 0.9s;
}
.landscape .landscapeItem.mountains:nth-last-child(5) {
	transition-delay: 1s;
}
.landscape .landscapeItem.mountains:nth-last-child(6) {
	transition-delay: 1.1s;
}
.landscape .landscapeItem.mountains:nth-last-child(7) {
	transition-delay: 1.2s;
}
.landscape .landscapeItem.mountains:nth-last-child(8) {
	transition-delay: 1.3s;
}
.landscape .landscapeItem.mountains:nth-last-child(9) {
	transition-delay: 1.4s;
}
.landscape .landscapeItem.mountains:nth-last-child(10) {
	transition-delay: 1.5s;
}
.landscape .landscapeItem.trees.background {
	z-index: 4;
	background-image: url(https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/mountain2.svg);
}
.landscape .landscapeItem.trees.midground {
	z-index: 5;
	background-image: url(https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/mountain1.svg);
}
.landscape .landscapeItem.trees.foreground {
	z-index: 6;
	background-image: url(https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/mountain.svg);
}
.landscape .landscapeItem.trees:last-child {
	transition-delay: 0.1s;
}
.landscape .landscapeItem.trees:nth-last-child(2) {
	transition-delay: 0.2s;
}
.landscape .landscapeItem.trees:nth-last-child(3) {
	transition-delay: 0.3s;
}
.landscape .landscapeItem.trees:nth-last-child(4) {
	transition-delay: 0.4s;
}
.landscape .landscapeItem.trees:nth-last-child(5) {
	transition-delay: 0.5s;
}
.landscape .landscapeItem.trees:nth-last-child(6) {
	transition-delay: 0.6s;
}
.landscape .landscapeItem.trees:nth-last-child(7) {
	transition-delay: 0.7s;
}
.landscape .landscapeItem.trees:nth-last-child(8) {
	transition-delay: 0.8s;
}
.landscape .landscapeItem.trees:nth-last-child(9) {
	transition-delay: 0.9s;
}
.landscape .landscapeItem.trees:nth-last-child(10) {
	transition-delay: 1s;
}
.landscape .landscapeItem.topographic {
	transition: opacity 1s cubic-bezier(0.33, 0, 0, 1);
	transition-delay: 2s;
	opacity: 0;
	bottom: 0;
	z-index: 7;
}
.landscape .landscapeItem.topographic.animateIn {
	opacity: 0.2;
}
.landscape .landscapeItem.topographic.animateOut {
	opacity: 0;
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
	const terrain = document.getElementById('terrainCanvas') as HTMLCanvasElement;
	const background = document.getElementById('bgCanvas') as HTMLCanvasElement;
	const terrainContext = terrain.getContext('2d')!;
	const backgroundContext = background.getContext('2d')!;

	const width = window.innerWidth;
	const height = Math.min(document.body.offsetHeight, 400);

	terrain.width = background.width = width;
	terrain.height = background.height = height;

	window.requestAnimationFrame =
		window.requestAnimationFrame ||
		(window as any).mozRequestAnimationFrame ||
		(window as any).webkitRequestAnimationFrame ||
		(window as any).msRequestAnimationFrame ||
		((callback: FrameRequestCallback) => window.setTimeout(callback, 1000 / 60));

	const generateTerrain = (): void => {
		const points: number[] = [];
		let displacement = 0;
		const power = 2 ** Math.ceil(Math.log2(width));

		points[0] = height - (Math.random() * height) / 2 - displacement;
		points[power] = height - (Math.random() * height) / 2 - displacement;

		for (let i = 1; i < power; i *= 2) {
			const step = power / i / 2;
			for (let j = step; j < power; j += power / i) {
				points[j] = (points[j - step] + points[j + step]) / 2 + Math.floor(Math.random() * (-displacement * 2) + displacement);
			}
			displacement *= 0.6;
		}

		terrainContext.beginPath();
		for (let i = 0; i <= width; i++) {
			if (i === 0) terrainContext.moveTo(0, points[0]);
			else if (points[i] !== undefined) terrainContext.lineTo(i, points[i]);
		}

		terrainContext.lineTo(width, terrain.height);
		terrainContext.lineTo(0, terrain.height);
		terrainContext.lineTo(0, points[0]);
	};

	class Star {
		x: number;
		y: number;
		size: number;
		speed: number;

		constructor(options: { x?: number; y?: number } = {}) {
			this.reset(options);
		}

		reset(options: { x?: number; y?: number } = {}): void {
			this.size = Math.random() * 2;
			this.speed = Math.random() * 0.1;
			this.x = options.x || width;
			this.y = options.y || Math.random() * height;
		}

		update(): void {
			this.x -= this.speed;
			if (this.x < 0) this.reset();
			else backgroundContext.fillRect(this.x, this.y, this.size, this.size);
		}
	}

	class ShootingStar {
		x: number;
		y: number;
		len: number;
		speed: number;
		size: number;
		waitTime: number;
		active: boolean;

		constructor() {
			this.reset();
		}

		reset(): void {
			this.x = Math.random() * width;
			this.y = 0;
			this.len = Math.random() * 80 + 10;
			this.speed = Math.random() * 10 + 6;
			this.size = Math.random() * 1 - 0.1;
			this.waitTime = Date.now() + Math.random() * 3000 + 500;
			this.active = false;
		}

		update(): void {
			if (this.active) {
				this.size -= 0.15;
				this.x -= this.speed;
				this.y += this.speed;

				if (this.x < 0 || this.y >= height) this.reset();
				else {
					backgroundContext.lineWidth = this.size;
					backgroundContext.beginPath();
					backgroundContext.moveTo(this.x, this.y);
					backgroundContext.lineTo(this.x + this.len, this.y - this.len);
					backgroundContext.stroke();
				}
			} else if (this.waitTime < Date.now()) {
				this.active = true;
			}
		}
	}

	const entities: (Star | ShootingStar)[] = [...Array.from({ length: Math.floor(height / 10) }, () => new Star({ x: Math.random() * width, y: Math.random() * height })), new ShootingStar(), new ShootingStar()];

	const animate = (): void => {
		backgroundContext.fillStyle = '#000';
		backgroundContext.fillRect(0, 0, width, height);
		backgroundContext.fillStyle = '#fff';
		backgroundContext.strokeStyle = '#fff';

		entities.forEach((entity) => entity.update());
		requestAnimationFrame(animate);
	};

	generateTerrain();
	backgroundContext.fillRect(0, 0, width, height);

	Array.from(document.getElementsByClassName('landscapeItem')).forEach((mountain) => mountain.classList.add('animateIn'));

	animate();

	setTimeout(() => {
		document.body.style.overflow = 'auto';
		document.documentElement.style.overflow = 'auto';
		document.body.style.paddingRight = '0px';
		document.documentElement.style.paddingRight = '0px';
	}, 2500);
});
</script>
