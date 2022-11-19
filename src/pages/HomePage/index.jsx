import React, { useRef, useState } from "react"
import { LogoHeader, MenuKingfloki, MenuKingland, MenuKingpad, Video1, Video2, KingFloki, KingPad, KingLand, BgMain, BgKingFloki, BgKingPad, BgKingland, TelegramIcon, TwitterIcon, YoutubeIcon, GithubIcon, MediumIcon } from "../../constants"
import "./styles/index.scss"

const HomePage = () => {

    const [bgSvg, setBgSvg] = useState(BgMain);

    const changeBg = (idx) => {
        switch (idx) {
            case 0:
                setBgSvg(BgMain);
                break;
            case 1:
                setBgSvg(BgKingFloki);
                break;
            case 2:
                setBgSvg(BgKingPad);
                break;
            case 3:
                setBgSvg(BgKingland);
                break;
            default:
                break;
        }
    }
    return (
        <>
            <div className="section section-1">
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
                                    <img src={MenuKingfloki} style={{ visibility: "hidden" }} alt="king-floki" />
                                </div>
                                <div className="btn-kingland">
                                    <img src={MenuKingland} style={{ visibility: "hidden" }} alt="king-land" />
                                </div>
                                <div className="btn-kingpad">
                                    <img src={MenuKingpad} style={{ visibility: "hidden" }} alt="king-pad" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-video-section">
                        <video className="background-video" loop autoPlay muted id="my-video" >
                            <source src={Video1} type="video/mp4" id="background-video-source" />
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
                                <source src={Video2} type="video/mp4" id="background-video-source" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section-3">
                <div className="background-svg" style={{ backgroundImage: `url(${bgSvg})` }}>
                    <p className="whole-system">
                        <span className="bold">A coin </span>
                        to drive the
                        <span className="bold"> whole system</span>
                    </p>
                    <div className="king-logos">
                        <div className="king-floki" onMouseOver={() => changeBg(1)} onMouseOut={() => changeBg(0)}>
                            <img src={KingFloki} style={{ visibility: "hidden" }} />
                        </div>
                        <div className="king-pad" onMouseOver={() => changeBg(2)} onMouseOut={() => changeBg(0)} >
                            <img src={KingPad} style={{ visibility: "hidden" }} />
                        </div>
                        <div className="king-land" onMouseOver={() => changeBg(3)} onMouseOut={() => changeBg(0)}>
                            <img src={KingLand} style={{ visibility: "hidden" }} />
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
                    <div className="metaverse-section">

                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage