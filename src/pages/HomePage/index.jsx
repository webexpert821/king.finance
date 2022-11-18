import React from "react"
import { LogoHeader, Kingfloki, Kingland, Kingpad, Video1, Video2 } from "../../constants"
import "./styles/index.scss"

const HomePage = () => {
    return (
        <div className="container">
            <div className="section section-1">
                <div className="header">
                    <div className="logo">
                        <img src={LogoHeader} alt="header-logo" />
                    </div>
                    <div className="button-area">
                        <button className="rect-button">
                            Docs
                        </button>
                        <button className="rect-button">
                            Staking
                        </button>
                        <div className="button-group">
                            <div className="btn-kingfloki">
                                <img src={Kingfloki} style={{ visibility: "hidden" }} alt="king-floki" />
                            </div>
                            <div className="btn-kingland">
                                <img src={Kingland} style={{ visibility: "hidden" }} alt="king-land" />
                            </div>
                            <div className="btn-kingpad">
                                <img src={Kingpad} style={{ visibility: "hidden" }} alt="king-pad" />
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
            <div className="section section-2">
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
    )
}

export default HomePage