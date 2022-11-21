import React, { useState, useEffect } from "react"
import { LogoHeader, MenuKingfloki, MenuKingland, MenuKingpad, DeskVideo1, DeskVideo2, TabletVideo1, TabletVideo2, MobileVideo1, MobileVideo2, KingFloki, KingPad, KingLand, MobBgMain, MobBgKingFloki, MobBgKingPad, MobBgKingland, TelegramIcon, TwitterIcon, YoutubeIcon, GithubIcon, MediumIcon, DeskPlayearn, TabletPlayearn, MobilePlayearn, DeskNftGame, TabletNftGame, MobileNftGame, DeskBoxKingpad, MobileBoxKingPad, DeskBoxKingland, MobileBoxKingland, CmcIcon, CoingeckoIcon, BscscanIcon, DeskFooterLogo, TabletFooterLogo, MobileFooterLogo, TabBgMain, DeskBgMain } from "../../constants"
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
                <video className="mobile-background-video" loop autoPlay muted id="my-video" >
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
                                    <button className="rect-button">
                                        Docs
                                    </button>
                                    <button className="rect-button">
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
                        <video className="desktop-background-video" loop autoPlay muted id="my-video" >
                            <source src={DeskVideo1} type="video/mp4" id="background-video-source" />
                            Your browser does not support the video tag.
                        </video>
                        <video className="tablet-background-video" loop autoPlay muted id="my-video" >
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
                            <video className="background-video" loop autoPlay muted id="my-video" >
                                <source src={DeskVideo2} type="video/mp4" id="background-video-source" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section section-3">
                <div className="background-svg">
                    <img src={bgSvg} alt="desktop-background-svg" style={{ width: "100%", height: "100%" }} />
                    {/* <img src={bgSvg} alt="mobile-background-svg" style={{ width: "100%", height: "100%"}}/> */}
                    <div className="section-3-container">
                        <p className="whole-system">
                            <span className="bold">A coin </span>
                            to drive the
                            <span className="bold"> whole system</span>
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
                                <img src={TelegramIcon} className="social-icon" alt="telegram-icon" />
                            </div>
                            <div className="social-box">
                                <img src={TwitterIcon} className="social-icon" alt="twitter-icon" />
                            </div>
                            <div className="social-box">
                                <img src={YoutubeIcon} className="social-icon" alt="youtube-icon" />

                            </div>
                            <div className="social-box">
                                <img src={GithubIcon} className="social-icon" alt="github-icon" />
                            </div>
                            <div className="social-box">
                                <img src={MediumIcon} className="social-icon" alt="medium-icon" />
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
                            <video className="desktop-background-video" loop autoPlay muted id="my-video" >
                                <source src={DeskPlayearn} type="video/mp4" id="background-video-source" />
                                Your browser does not support the video tag.
                            </video>
                            <video className="mobile-background-video" loop autoPlay muted id="my-video" >
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
                                    COMMING SOON
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
                                    COMMING SOON
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
                        <div className="token-button">Medium Kit</div>
                        <div className="token-button">King Pass</div>
                    </div>
                </div>
                <div className="footer">
                    <img src={DeskBgMain} alt="footer-background" className="desktop-footer-background" width="100%" height="100%" style={{ objectFit: "cover" }} />
                    <img src={MobBgMain} alt="footer-background" className="tab-footer-background" width="100%" height="100%" style={{ objectFit: "cover" }} />
                    <div className="footer-content">
                        <div className="king-logo">
                            <img src={DeskFooterLogo} className="desk-footer-logo" alt="king-logo-png" />
                            <img src={TabletFooterLogo} className="tablet-footer-logo" alt="king-logo-png" />
                            <img src={MobileFooterLogo} className="mobile-footer-logo" alt="king-logo-png" />
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
                    {/* <div className="footer-container">
                        <div className="footer-content">
                            <div className="king-logo">
                                <img src={DeskFooterLogo} className="desk-footer-logo" alt="king-logo-png" />
                                <img src={TabletFooterLogo} className="tablet-footer-logo" alt="king-logo-png" />
                                <img src={MobileFooterLogo} className="mobile-footer-logo" alt="king-logo-png" />
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
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default HomePage