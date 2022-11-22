import React, { useState, useEffect } from "react"
import { LogoHeader, DeskVideo1, DeskVideo2, TabletVideo1,  MobileVideo1, KingPad, KingLand, MobBgMain, MobBgKingFloki, MobBgKingPad, MobBgKingland, TelegramIcon, TwitterIcon, YoutubeIcon, GithubIcon, MediumIcon, DeskPlayearn, MobilePlayearn, DeskNftGame, MobileNftGame, DeskBoxKingpad, MobileBoxKingPad, DeskBoxKingland, MobileBoxKingland, CmcIcon, CoingeckoIcon, BscscanIcon, DeskFooterLogo, DeskBgMain } from "../../constants"
import Aos from 'aos'
import "aos/dist/aos.css"
import "./styles/index.scss"

const HomePage = () => {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])

    const [bgSvg, setBgSvg] = useState(MobBgMain);

    const changeBg = (idx) => {
        console.log("hover");
        switch (idx) {
            case 0:
                setBgSvg(MobBgMain);
                break;
            case 1:
                setBgSvg(MobBgKingFloki);
                break;
            case 2:
                setBgSvg(MobBgKingPad);
                break;
            case 3:
                setBgSvg(MobBgKingland);
                break;
            default:
                break;
        }
    }


    return (
        <>
            <div className="section section-1">
                <video className="mobile-background-video" playsInline loop autoPlay muted id="my-video" >
                    <source src={MobileVideo1} type="video/mp4" id="background-video-source" />
                    Your browser does not support the video tag.
                </video>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <img src={LogoHeader} alt="header-logo" className="logo-img" />
                        </div>
                        <div className="button-area">
                            <div className="rect-buttons-group">
                                <div className="mobile-logo">
                                    <img src={LogoHeader} alt="mobile-header-logo" className="mobile-logo-img" />
                                </div>
                                <div className="rect-buttons">
                                    <button className="rect-button docs">
                                        Docs
                                    </button>
                                    <button className="rect-button staking">
                                        Staking
                                    </button>
                                </div>
                            </div>
                            <div className="button-group">
                                <div className="btn-kingfloki">
                                </div>
                                <div className="btn-kingland">
                                </div>
                                <div className="btn-kingpad">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-video-section">
                        <video className="desktop-background-video" playsInline loop autoPlay muted id="my-video" >
                            <source src={DeskVideo1} type="video/mp4" id="background-video-source" />
                            Your browser does not support the video tag.
                        </video>
                        <video className="tablet-background-video" playsInline loop autoPlay muted id="my-video" >
                            <source src={TabletVideo1} type="video/mp4" id="background-video-source" />
                            Your browser does not support the video tag.
                        </video>    

                        <div className="background-video-overlay">
                            <div className="king-finance" >
                                <span style={{ fontFamily: 'gotham-bold' }}>King</span>
                                <span style={{ fontFamily: 'gotham-thin', marginLeft: '12px' }}>Finance</span>
                            </div>
                            <div className="king-finance-bottom">
                                Unique. Visionary. Powerful
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-2">
                <div className="container">
                    <div className="about-king">
                        <div className="king-details">
                            <p>Crowning DeFi. <span className="bold">KING</span> is the parent company in charge of the development of three of the most innovative services in decentralised finance. Our ecosystem is based on our ‘ internal circular economy ’, where our branches feed each other continuously and in a balanced way throughout the individual generation of funds. </p>
                            <p>Immerse yourself within <span className="bold">KingPad, KingLand</span> and <span className="bold">KingFloki</span>.</p>
                        </div>
                        <div className="king-logo">
                            <video className="background-video" playsInline loop autoPlay muted id="my-video" >
                                <source src={DeskVideo2} type="video/mp4" id="background-video-source" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-3">
                <div className="background-svg">       
                    <img src={bgSvg} alt="desktop-background-svg" style={{ width: "100%", height: "100%"}} />
                    {/* <img src={bgSvg} alt="mobile-background-svg" style={{ width: "100%", height: "100%"}}/> */}
                    <div className="section-3-container">
                        <p className="whole-system">
                            <span className="bold">A coin </span>
                            to drive the
                            <span className="bold"> whole ecosystem</span>
                        </p>
                        <div className="king-logos">
                            <div className="king-floki" onMouseOver={() => changeBg(1)} onMouseOut={() => changeBg(0)}>
                            </div>
                            <div className="king-pad" onMouseOver={() => changeBg(2)} onMouseOut={() => changeBg(0)} >
                            </div>
                            <div className="king-land" onMouseOver={() => changeBg(3)} onMouseOut={() => changeBg(0)}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="connect-btn-group">
                    <div className="connect-with-king">
                        <p>Connect With King</p>
                        <div className="social-link-group">
                            <div className="social-box">
                                <svg className="social-icon" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.83 21.47" fill="currentColor">
                                    <g id="svg2575">
                                        <path id="headericon_tg" data-name="headericon tg" className="cls-1" d="M21.16,.24L.89,8.9S-.07,9.26,0,9.92s.86,.96,.86,.96l5.1,1.87h0L18.21,4.28s.71-.47,.68,0c0,0,.13,.08-.25,.47S9.02,14.18,9.02,14.18l-.66,6.16v.02c.18,.07,.39,.04,.54-.08l3.3-3.27,5.14,4.29c.63,.36,1.43,.14,1.79-.48,.04-.07,.08-.15,.1-.23L22.83,.76c0-1.32-1.67-.52-1.67-.52Z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="social-box">
                                <svg id="Layer_2" className="social-icon" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.95 23.12" fill="currentColor">
                                    <g id="svg2575">
                                        <g id="icon_twitter" data-name="icon twitter">
                                        <path id="Path_317" data-name="Path 317" className="cls-1" d="M28.94,2.74c-1.09,.47-2.24,.78-3.41,.92,1.23-.72,2.16-1.87,2.61-3.23-1.17,.68-2.44,1.16-3.77,1.42C23.24,.66,21.67,0,20.04,0c-3.25-.03-5.91,2.58-5.94,5.84,0,.45,.05,.89,.15,1.33-4.76-.23-9.2-2.44-12.24-6.1-.53,.89-.8,1.9-.8,2.93,0,1.96,1,3.79,2.64,4.86-.94-.03-1.86-.28-2.69-.73v.07c.02,2.8,2.01,5.2,4.76,5.72-.88,.23-1.79,.27-2.68,.1,.8,2.39,3.02,4.02,5.55,4.05-2.11,1.63-4.71,2.51-7.38,2.5-.47,0-.95-.03-1.42-.08,2.72,1.72,5.88,2.63,9.1,2.62,9.18,.15,16.75-7.17,16.9-16.36,0-.08,0-.17,0-.25,0-.25,0-.51-.02-.76,1.16-.82,2.16-1.85,2.96-3.02"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="social-box">
                                <svg id="Layer_2" className="social-icon" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 33.03 23.12" fill="currentColor">
                                    <g id="svg2575">
                                        <g id="icon_youtube" data-name="icon youtube">
                                            <path id="Path_24913" data-name="Path 24913" className="cls-3" d="M32.34,3.61c-.38-1.42-1.5-2.54-2.92-2.92-2.57-.69-12.9-.69-12.9-.69,0,0-10.32,0-12.9,.69-1.42,.38-2.54,1.5-2.92,2.92C.21,6.23-.02,8.89,0,11.56c-.02,2.67,.21,5.33,.69,7.95,.38,1.42,1.5,2.54,2.92,2.92,2.58,.69,12.9,.69,12.9,.69,0,0,10.33,0,12.9-.69,1.42-.38,2.54-1.5,2.92-2.92,.47-2.62,.71-5.28,.69-7.95,.02-2.67-.21-5.33-.69-7.95M13.21,16.51V6.6l8.58,4.96-8.58,4.96Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="social-box">
                                <svg id="Layer_2" className="social-icon" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.17 23.52" fill="currentColor">
                                    <g id="svg2575">
                                        <g id="icon_github" data-name="icon github">
                                            <path id="Path_24899" data-name="Path 24899" className="cls-1" d="M24.16,12.28C24.27,5.61,18.95,.11,12.28,0,5.61-.11,.11,5.22,0,11.89c-.08,5.23,3.2,9.92,8.15,11.62,.34-.17,.58-.5,.62-.88,0-.65-.01-2.33-.01-2.33-.42,.06-.85,.09-1.27,.09-1.23,.08-2.36-.67-2.77-1.83-.27-.66-.74-1.22-1.36-1.58-.31-.2-.38-.43-.02-.5,1.67-.31,2.1,1.85,3.21,2.2,.77,.24,1.6,.17,2.33-.18,.1-.62,.45-1.17,.96-1.53-2.84-.27-4.52-1.23-5.39-2.78l-.09-.17-.22-.49-.07-.18c-.28-.87-.41-1.78-.39-2.69-.05-1.27,.43-2.51,1.33-3.41-.37-1.13-.29-2.35,.21-3.42,0,0,1.23-.25,3.55,1.38,2.03-.53,4.15-.57,6.2-.12,.97-.63,2.75-1.52,3.47-1.27,.48,.98,.57,2.11,.25,3.16,1.01,1.06,1.56,2.47,1.52,3.93,0,.82-.11,1.64-.31,2.44l-.1,.35s-.06,.16-.12,.32l-.08,.17c-.84,1.81-2.57,2.48-5.35,2.76,.9,.56,1.16,1.25,1.16,3.14s-.03,2.14-.02,2.58c.06,.37,.28,.69,.6,.87,4.86-1.6,8.16-6.13,8.18-11.24Z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div className="social-box">
                                <svg id="Layer_2" className="social-icon" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.11 18.68" fill="currentColor">
                                    <g id="svg2575">
                                        <g id="icon_coingecko" data-name="icon github">
                                            <path id="Path_29891" data-name="Path 29891" className="cls-1" d="M18.68,9.4c-.03,5.16-4.24,9.31-9.4,9.28C4.12,18.64-.03,14.44,0,9.28,.03,4.14,4.2,0,9.34,0c5.17,.02,9.35,4.23,9.34,9.4"/>
                                            <path id="Path_29892" data-name="Path 29892" className="cls-1" d="M28.92,9.4c0,4.89-2.09,8.85-4.67,8.85s-4.67-3.96-4.67-8.85S21.67,.55,24.25,.55s4.67,3.96,4.67,8.85"/>
                                            <path id="Path_29893" data-name="Path 29893" className="cls-1" d="M33.11,9.4c0,4.38-.73,7.93-1.64,7.93s-1.65-3.55-1.65-7.93,.73-7.93,1.64-7.93,1.64,3.55,1.64,7.93"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-4">
                <div className="container container-4">
                    <div className="metaverse-section" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <div className="king-floki-logo" />
                        <div className="metaverse-title">
                            <div className="awesome-game">
                                An awesome game in the
                            </div>
                            <div className="metaverse-letter">
                                Metaverse
                            </div>
                            <button className="metaverse-play-button">
                                Play Now
                            </button>
                        </div>
                    </div>
                    <div className="game-section" >
                        <div className="nft-game" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                            <img src={DeskNftGame} className="desktop-nft-game-gif" alt="nft-game-gif" />
                            <img src={MobileNftGame} className="mobile-nft-game-gif" alt="nft-game-gif" />
                            <div className="background-overlay">
                                <div className="in-game-nfts" >
                                    <div className="in-game">
                                        In game
                                    </div>
                                    <div className="nfts">
                                        NFTs
                                    </div>
                                </div>
                                <button className="mint-button">
                                    Mint Now
                                </button>
                            </div>
                        </div>
                        <div className="play-to-earn" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                            <video className="desktop-background-video" playsInline loop autoPlay muted id="my-video" >
                                <source src={DeskPlayearn} type="video/mp4" id="background-video-source" />
                                Your browser does not support the video tag.
                            </video>
                            <video className="mobile-background-video" playsInline loop autoPlay muted id="my-video" >
                                <source src={MobilePlayearn} type="video/mp4" id="background-video-source" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="background-overlay">
                                <div className="to-earn" >
                                    <div className="play-to">
                                        Play to
                                    </div>
                                    <div className="earn">
                                        EARN
                                    </div>
                                </div>
                                <button className="play-button">
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="kingpad-section" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <img src={DeskBoxKingpad} className="desktop-box-kingpad" alt="desktop-box-kingpad" />
                        <img src={MobileBoxKingPad} className="mobile-box-kingpad" alt="mobile-box-kingpad" />
                        <div className="background-overlay">
                            <div className="kingpad-details">
                                <div className="kingpad-logo">
                                    <img src={KingPad} alt="king-pad" className="king-pad" />
                                </div>
                                <div className="safe-place">
                                    <p>A safe place</p>
                                    <p>to join the best.</p>
                                </div>
                                <button className="comming-soon">
                                    COMING SOON
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="kingland-section" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                        <img src={DeskBoxKingland} className="desktop-box-kingland" alt="desktop-box-kingland" />
                        <img src={MobileBoxKingland} className="mobile-box-kingland" alt="mobile-box-kingland" />
                        <div className="background-overlay">
                            <div className="kingland-details">
                                <div className="kingland-logo">
                                    <img src={KingLand} alt="king-land" className="king-land" />
                                </div>
                                <div className="real-estate">
                                    <p>Be the king of </p>
                                    <p>your Real Estate</p>
                                </div>
                                <button className="comming-soon">
                                    COMING SOON
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="section-5">
                <div className="container container-5">
                    <div className="external-links">
                        <div className="medium-link">
                            <img src={CmcIcon} alt="medium-link-icon" className="link-icon" />
                        </div>
                        <div className="coingecko-link">
                            <img src={CoingeckoIcon} alt="coingecko-link-icon" className="link-icon" />
                        </div>
                        <div className="bscscan-link">
                            <img src={BscscanIcon} alt="bscscan-link-icon" className="link-icon" />
                        </div>
                    </div>
                    <div className="external-buttons">
                        <div className="token-button">Token</div>
                        <div className="token-button">Team</div>
                        <div className="token-button">Docs</div>
                        <div className="token-button">Media Kitwith COMING</div>
                        <div className="token-button">King Pass</div>
                    </div>
                </div>
                <div className="footer">
                    <img src={DeskBgMain} className="footer-background" alt="footer-background" />
                    <div className="footer-content">
                        <div className="king-logo">
                            <img src={DeskFooterLogo} className="desk-footer-logo" alt="king-logo-png" />
                        </div>
                        <div className="copyright">
                            <div className="cookie">Cookie preferences</div>
                            <div className="line">|</div>
                            <div className="privacy">Privacy Police</div>
                            <div className="line">|</div>
                            <div className="terms">Terms of use</div>
                        </div>
                        <div className="social-link-group">
                            <img src={TelegramIcon} className="social-icon" alt="telegram-icon" />
                            <img src={TwitterIcon} className="social-icon" alt="twitter-icon" />
                            <img src={YoutubeIcon} className="social-icon" alt="youtube-icon" />
                            <img src={GithubIcon} className="social-icon" alt="github-icon" />
                            <img src={MediumIcon} className="social-icon" alt="medium-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage