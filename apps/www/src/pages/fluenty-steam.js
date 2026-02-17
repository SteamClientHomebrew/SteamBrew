import '../css/index.css';

import RenderFooter from '../components/FooterComponent';
import RenderHeader from '../components/HeaderComponent';
import Head from 'next/head';

import { fluenty } from '../components/RenderFluenty';
import { useEffect } from 'react';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// I hate this thing, so I'll import the images manually, feel free to map it -claw
import headerMain from '../assets/images/headerMain.webp';
import gameLib from '../assets/images/gameLib.webp';
import frontStore from '../assets/images/frontStore.webp';
import gameStore from '../assets/images/gameStore.webp';
import friendsChat from '../assets/images/friendsChat.webp';
import tweakOptions from '../assets/images/tweakOptions.webp';

export async function getServerSideProps(context) {
	const isSteamClient = /Valve Steam Client/.test(context.req.headers['user-agent']);
	return {
		props: {
			isSteamClient,
		},
	};
}

export default function FluentyViewModal({ isSteamClient }) {
	useEffect(() => {
		Fancybox.bind('[data-fancybox]', {
			Images: {
				Panzoom: {
					maxScale: 2,
				},
			},
			Thumbs: {
				type: 'classic',
			},
		});
	}, []);

	return (
		<div>
			<Head>
				<title>{`Fluenty - Millennium`}</title>
				<meta name="description" content={fluenty.description} />
				<meta property="og:title" content={`Fluenty - Millennium`} />
				<meta property="og:description" content={fluenty.description} />
				<meta property="og:image" content={'https://i.imgur.com/ca6ncMp.gif'} />
				<meta property="og:image:alt" content="theme Thumbnail" />
				<meta property="og:image:width" content="1920" />
				<meta property="og:image:width" content="1080" />
				<meta name="description" content={fluenty.description} />
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:title" content={`Fluenty - Millennium`} />
				<meta property="twitter:description" content={fluenty.description} />
				<meta property="twitter:image" content={'https://i.imgur.com/ca6ncMp.gif'} />
				<meta property="twitter:image:alt" content="theme Thumbnail" />
				<meta property="og:site_name" content="Millennium" />
				<meta property="twitter:site" content="Millennium" />
				<meta name="theme-color" content="#3a71c1" />

				<meta name="author" content={'Millennium'} />
			</Head>
			<div className="os-resize-observer-host observed">
				<div className="os-resize-observer"></div>
			</div>
			<div className="os-padding">
				<div className="os-content">
					<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
					<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
					{!isSteamClient ? <RenderHeader /> : <></>}
					<section id="main-page-content">
						<section id="addon-details" className="page-section">
							<div className="page-section-inner theme-view-panel">
								<img loading="lazy" src={'https://blogs.windows.com/wp-content/uploads/prod/sites/2/2021/10/Windows-11-Bloom-Screensaver-Dark-scaled.jpg'} className="addon-backdrop" />
								<div className="flex-container align-center justify-between" id="addon-details-title">
									<div className="disabled sign-in-gate"></div>
								</div>
								<div className="flex-container" id="addon-splitview-container">
									<div className="addon-details-column" id="addon-details-right-column">
										<div className="addon-details-segment" id="addon-details-column-actions">
											<a className="link_link__hbWKh link_secondary__F1rqx" href="/themes">
												<small>← Back to Themes</small>
											</a>
											<a target="_blank" className="addon-author-container">
												<img loading="lazy" src={`https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/steambrew-logo.png`} />
												<h5>Steam Homebrew</h5>
											</a>
											<h1 className="title">Fluenty</h1>
											<div className="title-description theme-desc">{fluenty?.description}</div>
											<section id="addon-actions">
												<div className="btn-container direction-column">
													<div className="wrap-buttons">
														<a href="https://www.patreon.com/FluentyforSteam" className="btn btn-primary" id="download-btn">
															<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACmUlEQVR4nO2ZT4hNURzHPywMYxaisDXjz4YhIskUYzNi1pQ/CxJrigXNjClWhCWGWFFsGaWkKWPLFJN/ZcpKM/7n+TN5OnVufbuNe+85d+acl96nTq/eud/v73vfu+93z7kP6vxfbAEuAy+Ab3YMA5fsXM3SDAwA1ZzxAFhMjbEB+FggfDLGgI3UCEtS4SvAOWAdMBtoBNba9ypy3CjQEjv8NOChhBoBlmccvwJ4l7qcorIp9clnhU9oBX6Irp2IXJUg5hIpygXRXSQizyWIuc6Lsl50wwRiJdBv+/pEnaXJHvfBoRuZ8cXqZsh7X4G79nKbFLYBv3OCJLiEz9OamlvLhp9b8FOdihOo2nY7p8wJ7BWzV8CifxR0JUvbDLyW+T0l8nNajHocQuSRp+2ReZPBm+titM8xRBZ52v0yf40S3BejjtRcsjQwr67kaTukrskwKb0+3dZO2ZZnXl3J07ZK3WeU4LMYmY4UinlS95OvSZOYfCf8QrEywY3SiWViYNpaaN5I/aU+Bu1iYHZboRmQ+pt9DHaLwQ3Cc1Pq7/IxOCYGZwjPWal/1MdA1+2HCc8RqX/ex+C2GOwgPDul/i0fg8di0EZ42qT+Ix+DETEwK8TQtEj9t67i6cBPK/4DzCQ8s+QEftlMhVmQ2lTEYkxyzHcRrhbhEPEYkhyrXITbRWg287G4JznM3rwwB0XYRzyuSI4DLsKTIuwlHr0ZW9pM+kRovo1YHJIc5j+GwvSLsJN4dEqOOy7CpyI0HSkWayTHExfhqAjNPSEWCyXHexdhcheu2jtiLBolh3ks77WdOw40EJ4G4ITkeOki1idjtTK6XE7ALN4GayB01Y5BnwWlufa77ROJ8Qihx+0D5a7Iv8M6deowhfwF+BC2GOS0rI0AAAAASUVORK5CYII=" />
															<span draggable>Purchase • $5 USD</span>
														</a>
													</div>
												</div>
											</section>
											<section id="about-addon">
												<span className="addon-metadata-row">
													<strong>Downloads: </strong> {fluenty.downloads}{' '}
												</span>
												<span className="addon-metadata-row">
													<strong>Released: </strong>November 24th 2023
												</span>
												<span className="addon-metadata-row">
													<strong>Id: </strong>fluenty-steam
												</span>
											</section>
											<section id="addon-author"></section>
										</div>

										{/* Render Discord server invite link if there is one provided */}
										<div className="addon-details-segment" id="addon-details-column-server">
											<section id="addon-server">
												<div className="flex-container align-center">
													<img loading="lazy" src={'https://raw.githubusercontent.com/SteamClientHomebrew/SteamBrew/refs/heads/main/static/steambrew-logo.png'} />
													<div className="flex-container justify-center direction-column">
														<h5>Steam Homebrew</h5>
														<p>Support Server</p>
													</div>
												</div>
												<a rel="noreferrer noopener" target="_blank" className="btn btn-primary btn-join-server" href={'../discord'}>
													<span>Join Server</span>
												</a>
											</section>
										</div>
										{/* Render Tags if there are any */}
										<div className="addon-details-segment" id="addon-details-column-tags">
											<h3 className="addon-details-section-header">Tags</h3>
											<section>
												<div className="addon-tags">
													<span className="addon-tag">Dark</span>
													<span className="addon-tag">Fluent</span>
													<span className="addon-tag">Minimal</span>
													<span className="addon-tag">Soft</span>
												</div>
											</section>
										</div>
									</div>
									<div className="addon-details-column" id="addon-details-left-column">
										<article className="addon-details-segment markdown-readme-content">
											<div className="markdown-body">
												<div>
													<h1>Fluenty, made with ❤️ by Millennium</h1>
													<p>Inspired by the Microsft Store Fluent Design template launched with Windows 11</p>

													<p>
														You may ask why this theme costs money, and isn't free like the others. To deliver the best user experience, with fast and secure servers (including this website) we need funding somehow. That's
														why we made this theme; to give you something in return for supporting us, without forcing ads or other annoying funding methods.
													</p>

													<p>
														With that said, keep in mind that even if updates are sometimes infrequent, we are always working on something new and exciting, even if it may not be Fluenty directly. We are a limited team,
														and we are doing our best to balance our time between Millennium, Fluenty, and our personal lives.
													</p>

													<p>Thanks for understanding, and we hope you enjoy the theme ❤️</p>

													<a href={headerMain.src} target="_blank" data-fancybox>
														<img src={headerMain.src} alt="Steam Skin" />
													</a>
													<div className="FluentyImageContainer">
														<a href={gameLib.src} target="_blank" data-fancybox>
															<img src={gameLib.src} alt="Steam Skin" />
														</a>
														<a href={friendsChat.src} target="_blank" data-fancybox>
															<img src={friendsChat.src} alt="Steam Skin" />
														</a>
													</div>
													<div className="FluentyImageContainer">
														<a href={frontStore.src} target="_blank" data-fancybox>
															<img src={frontStore.src} alt="Steam Skin" />
														</a>
														<a href={gameStore.src} target="_blank" data-fancybox>
															<img src={gameStore.src} alt="Steam Skin" />
														</a>
													</div>
												</div>
												<h2>Installing</h2>
												<p>Purchase the theme through patreon subscription.</p>
												<p>Cancelling the subscription results in keeping the theme, however you will not receive future updates unless you resubscribe.</p>
												<p>Once subscribed, download the latest listed version and then open Millennium and click the open skins folder. Drag the downloaded theme into that directory and proceed to extract it.</p>
												<p>Select it from the menu and your good to go!</p>
												<h2>Configuration</h2>
												<p>Fluenty comes with various tweak options that you can customize.</p>
												<p>You can find more options once you have fluenty installed by going to the theme's settings. Below are the examples of fluenty's sidebar options and the play game button alignment.</p>
												<a href={tweakOptions.src} target="_blank" data-fancybox>
													<img src={tweakOptions.src} alt="Steam Skin" />
												</a>
												<h2>Notice</h2>
												<p>Fluenty is very close to being finished, however it's still in development and not everything is perfect. expect bugs and report them in the discord server if you encounter any!</p>
												<br />
												<br />
												<b>Copyright Project-Millennium © {new Date().getFullYear()}</b>
											</div>
										</article>
									</div>
								</div>
							</div>
						</section>
					</section>
					{!isSteamClient ? <RenderFooter /> : <></>}
				</div>
			</div>
		</div>
	);
}
