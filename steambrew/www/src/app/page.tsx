'use client';

import '@/css/index.css';
import '@/css/home.css';
import { useLayoutEffect, useState, useRef, useEffect, useCallback } from 'react';

import RenderFooter from '../components/FooterComponent';
import RenderHeader from '../components/HeaderComponent';
import { GetStatisticsSync, StatisticProps } from '../utils/Util';
import CountUp from 'react-countup';
import { CodeBlock } from '../utils/CodeBlock';
import { RenderBackdropAnimation } from '../components/RenderAnimation';
import { useScrollNavigation } from '../components/SmoothScroll';
import { PlatformIcon } from '@/components/Platform';

function RenderHome() {
    const [stat, setStat] = useState<StatisticProps>();
    const [scrolled, setIsFloating] = useState(false);

    useEffect(() => {
        GetStatisticsSync().then((stats) => setStat(stats));
    }, []);

    const mainContentRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const feature1Ref = useRef(null);
    const feature2Ref = useRef(null);
    const contributorsRef = useRef(null);
    const footerRef = useRef(null);

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (!videoRef.current) return;

        if (scrollTop === 0) {
            videoRef.current.currentTime = 0;
            videoRef?.current?.pause();
        } else {
            videoRef.current.play();
        }

        setIsFloating((window.scrollY || document.documentElement.scrollTop) > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const refsArray = [mainContentRef, videoRef, feature1Ref, feature2Ref, contributorsRef, footerRef];
    const { navigatorIndex, jumpTo } = useScrollNavigation(refsArray);

    return (
        <>
            <div itemScope itemType="https://schema.org/WebSite">
                <meta itemProp="url" content="https://steambrew.app/" />
                <meta itemProp="name" content="Steam Homebrew" />
            </div>

            <RenderHeader />
            <div ref={mainContentRef} />

            <main id="main-page-content" className="home-main-page-content">
                <section id="home-hero-section" className="page-section">
                    <RenderBackdropAnimation />

                    <div className="page-section-inner">
                        <div id="hero-top-container" className="flex-container align-center justify-center direction-column">
                            <h1 className="main-title text-center title">Millennium</h1>
                            <p className="text-center title-description">An open source gateway to a better Steam® client experience.</p>
                            <div className="btn-container">
                                <a href="https://docs.steambrew.app/users/getting-started/installation" target="_blank" rel="noreferrer">
                                    <button className="btn btn-primary" id="hero-download-button">
                                        <PlatformIcon />
                                        <span>Install Now</span>
                                    </button>
                                </a>
                                <a href="/discord">
                                    <button className="btn btn-secondary" id="hero-community-button">
                                        <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                            <path
                                                fillRule="evenodd"
                                                d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"
                                            ></path>
                                        </svg>
                                        <span>Join the conversation</span>
                                    </button>
                                </a>
                            </div>
                            {/*<div className="information-container">
								<div className="information-container-header">INFO</div>
								<div className="information-container-body">
									On December 19th, 2025, Valve updated the architecture of the Steam Client from 32bit to 64bit. As a result, some older versions of Millennium will no longer work, and won't be able to auto update. If Millennium is
									not loading, a manual re-install is required. The latest fixed version is 2.31.0. If this is your first time installing, or Millennium is working as intended, you can ignore this message.
									<br />
									<br />
									Thanks for your understanding, and thanks for using Millennium ❤️
								</div>
							</div>*/}

                            <div className="downloads-container">
                                <div className="downloads-count">
                                    <CountUp className='count-value' start={0} end={Number(stat?.download_count ?? 0)} />
                                    <span className='count-label'> Downloads</span>
                                </div>
                                <div className="downloads-count">
                                    <CountUp className='count-value' start={0} end={Number(stat?.server_members ?? 0)} />
                                    <span className='count-label'> Discord Members</span>
                                </div>
                            </div>
                        </div>
                        {/*<div id="mouse-icon" className={scrolled ? 'mouse-hidden' : 'mouse-shown'}>
							<div id="scroll-wheel"></div>
						</div>*/}
                    </div>
                </section>
                <section id="home-additional-features" className="page-section">
                    <div className="page-section-inner intro-section">
                        {/*<div className="showCaseContainer">
							<video ref={videoRef} autoPlay muted loop playsInline>
								<source src="https://github.com/user-attachments/assets/ea9028d1-ecfd-4d95-b199-33bb6b657bff" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div>*/}

                        <div className="features-view">
                            <div className="feature" id="feature-1" ref={feature1Ref}>
                                <div className="theme-showcase hide-mobile">
                                    <video autoPlay muted loop playsInline>
                                        <source src="https://github.com/user-attachments/assets/ea9028d1-ecfd-4d95-b199-33bb6b657bff" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                <div className="feature-info">
                                    <h1 className="title">Themes</h1>
                                    <p className="title-description" style={{ fontSize: '18px' }}>
                                        Themes allow you to completely customize your client with CSS. You can either make your own theme, or download the wide variety of themes from our community.
                                    </p>
                                    <a className="btn btn-secondary" href="/themes">
                                        <span>Browse Themes</span>
                                    </a>
                                </div>
                            </div>
                            <div className="feature" id="feature-2" ref={feature2Ref}>
                                <div className="feature-info">
                                    <h1 className="title">Plugins</h1>
                                    <p className="title-description" style={{ fontSize: '18px' }}>
                                        Plugins can increase the functionality and user experience of the app through TypeScript and LuaJIT. Write your own or download plugins made by the community.
                                    </p>
                                    <a className="btn btn-secondary" href="/plugins">
                                        <span>Browse Plugins</span>
                                    </a>
                                </div>
                                <div className="plugin-showcase hide-mobile">
                                    <div className="plugin-showcase-inner">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 65 65" fill="#fff" height="60px" width="60px">
                                            <use xlinkHref="#B" x=".5" y=".5" />
                                            <defs>
                                                <linearGradient id="A" x2="50%" x1="50%" y2="100%" y1="0%">
                                                    <stop stopColor="#111d2e" offset="0%" />
                                                    <stop stopColor="#051839" offset="21.2%" />
                                                    <stop stopColor="#0a1b48" offset="40.7%" />
                                                    <stop stopColor="#132e62" offset="58.1%" />
                                                    <stop stopColor="#144b7e" offset="73.8%" />
                                                    <stop stopColor="#136497" offset="87.3%" />
                                                    <stop stopColor="#1387b8" offset="100%" />
                                                </linearGradient>
                                            </defs>
                                            <symbol id="B">
                                                <g>
                                                    <path d="M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32s-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328z" fill="url(#A)" />
                                                    <path d="M30.31 23.985l.003.158-7.83 11.375c-1.268-.058-2.54.165-3.748.662a8.14 8.14 0 0 0-1.498.8L.042 29.893s-.398 6.546 1.26 11.424l12.156 5.016c.6 2.728 2.48 5.12 5.242 6.27a8.88 8.88 0 0 0 11.603-4.782 8.89 8.89 0 0 0 .684-3.656L42.18 36.16l.275.005c6.705 0 12.155-5.466 12.155-12.18s-5.44-12.16-12.155-12.174c-6.702 0-12.155 5.46-12.155 12.174zm-1.88 23.05c-1.454 3.5-5.466 5.147-8.953 3.694a6.84 6.84 0 0 1-3.524-3.362l3.957 1.64a5.04 5.04 0 0 0 6.591-2.719 5.05 5.05 0 0 0-2.715-6.601l-4.1-1.695c1.578-.6 3.372-.62 5.05.077 1.7.703 3 2.027 3.696 3.72s.692 3.56-.01 5.246M42.466 32.1a8.12 8.12 0 0 1-8.098-8.113 8.12 8.12 0 0 1 8.098-8.111 8.12 8.12 0 0 1 8.1 8.111 8.12 8.12 0 0 1-8.1 8.113m-6.068-8.126a6.09 6.09 0 0 1 6.08-6.095c3.355 0 6.084 2.73 6.084 6.095a6.09 6.09 0 0 1-6.084 6.093 6.09 6.09 0 0 1-6.081-6.093z" />
                                                </g>
                                            </symbol>
                                        </svg>

                                        <svg className="plugin-showcase-logo plugin-showcase-plus" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" id="Ebene_1" x="0px" y="0px" height="70px" width="70px" viewBox="0 0 947 947" enableBackground="new 0 0 947 947" xmlSpace="preserve">
                                            <g>
                                                <path fill="#000080" d="M835.5,473.6c0-199.8-162.2-362-362-362s-362,162.2-362,362c0,199.8,162.2,362,362,362   S835.5,673.4,835.5,473.6" />
                                                <path fill="#FFFFFF" d="M729.5,323.6c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S729.5,382.1,729.5,323.6" />
                                                <path fill="#000080" d="M941.5,111.5c0-58.5-47.5-106-106-106s-106,47.5-106,106c0,58.5,47.5,106,106,106S941.5,170.1,941.5,111.5" />
                                                <g>
                                                    <path fill="#FFFFFF" d="M258.1,627.8h117.3v26.7H227.8V417h30.3V627.8z" />
                                                    <path fill="#FFFFFF" d="M515.5,654.5v-23.8c-16,22.5-31.9,31.3-57,31.3c-33.2,0-54.4-18.2-54.4-46.6V483.8h27v120.9    c0,20.5,13.7,33.6,35.2,33.6c28.3,0,46.6-22.8,46.6-57.7v-96.8h27v170.7H515.5z" />
                                                    <path fill="#FFFFFF" d="M738.4,659.1c-8.8,2.3-13,2.9-18.6,2.9c-17.6,0-26.1-7.8-28-25.1c-19.2,17.6-36.5,25.1-58,25.1    c-34.5,0-56-19.5-56-50.5c0-22.2,10.1-37.5,30-45.6c10.4-4.2,16.3-5.5,54.7-10.4c21.5-2.6,28.3-7.5,28.3-18.9v-7.2    c0-16.3-13.7-25.4-38.1-25.4c-25.4,0-37.8,9.4-40.1,30.3h-27.4c0.7-16.9,3.9-26.7,11.7-35.5c11.4-12.7,31.9-19.9,56.7-19.9    c42,0,64.2,16.3,64.2,46.6v100.4c0,8.5,5.2,13.4,14.7,13.4c1.6,0,2.9,0,5.9-0.7V659.1z M690.8,570.1c-9.1,4.2-15,5.5-43.7,9.4    c-29,4.2-41.1,13.4-41.1,31.3c0,17.3,12.4,27.4,33.6,27.4c16,0,29.3-5.2,40.4-15.3c8.1-7.5,10.8-13,10.8-22.2V570.1z" />
                                                </g>
                                                <path fill="none" stroke="#808080" strokeWidth="10.8612" strokeMiterlimit="10" strokeDasharray="40.8475" d="M890.6,261   c33.5,65.8,51,138.6,51,212.5c0,258.4-209.7,468.1-468.1,468.1S5.4,731.9,5.4,473.5C5.4,215.1,215.1,5.4,473.5,5.4   c83.1,0,164.6,22.1,236.2,63.9" />
                                            </g>
                                        </svg>

                                        <svg className="plugin-showcase-logo plugin-showcase-plus" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="-11.5 -10.23174 23 20.46348">
                                            <title>React Logo</title>
                                            <circle cx={0} cy={0} r="2.05" fill="#61dafb" />
                                            <g stroke="#61dafb" strokeWidth={1} fill="none">
                                                <ellipse rx={11} ry="4.2" />
                                                <ellipse rx={11} ry="4.2" transform="rotate(60)" />
                                                <ellipse rx={11} ry="4.2" transform="rotate(120)" />
                                            </g>
                                        </svg>
                                    </div>

                                    <CodeBlock
                                        language="javascript"
                                        value={`(Object.values(findModule((m) => {if (typeof m !== 'object')return false;for (let prop in m) {if (m[props]?.m_mapModalManager && Object.values(m)?.find((x) => x?.type)) {return true;}}return false;}) || {})?.find((x) => x?.type?.toString()?.includes('((function(){')) ||Object.values(findModule((m) => {if (typeof m !== 'object')return false;for (let prop in m) {if (m[prop]?.toString()?.includes('"ModalManager","DialogWrapper"')) {return true;}}return false;}) || {})?.find((x) => x?.type?.toString()?.includes('((function(){')) ||findModuleChild((m) => {if (typeof m !== 'object')return undefined;for (let prop in m) {if (m[props]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[pr op]?.prototype?.render) {return m[prop];}}}));const ModalModule = findModule((mod) => {if (typeof mod !== 'object')return false;for (let prop in mod) {if (Object.keys(mod).length > 4 && mod[prop]?.toString().includes('.ModalPosition,fallback:'))return true;}return false; }); const wnd = GetMainSteamWindow()`}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="open-source-section" ref={contributorsRef}>
                            <h1 className="title text-center">Open Source ❤️</h1>
                            <p className="title-description text-center">Community driven, made by beautiful people just like you.</p>

                            {stat?.contributors && (
                                <div className="contributors-container">
                                    <div className="contributors-list">
                                        {stat.contributors.slice(0, 50).map((contributor, index) => (
                                            <a key={index} href={contributor.html_url} target="_blank" rel="noreferrer">
                                                <div key={index} className="contributor">
                                                    <img src={contributor.avatar_url} alt={contributor.login} />
                                                </div>
                                            </a>
                                        ))}
                                    </div>

                                    {stat.contributors.length > 50 && (
                                        <button
                                            className="btn btn-secondary view-more-contributors"
                                            onClick={() => window.open('https://github.com/SteamClientHomebrew/Millennium/graphs/contributors', '_blank')}
                                        >
                                            View More
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <RenderFooter />
            <div ref={footerRef} />

            {/*<div className="navigatorSidebar">
				{refsArray.map((ref, index) => (
					<div key={index} className={`navigatorItem ${index == navigatorIndex ? 'selected' : ''}`} onClick={() => jumpTo(ref)}></div>
				))}
			</div>*/}
        </>
    );
}

export default RenderHome;
