import React from "react";

import "../styles/login.css"

export default class Login extends React.Component{
    render(){
        return (
            <div className="log-in-box">
                <div className="log-in-logo-box">
                    <img className="log-in-logo" src="/static/images/playLogo.png"/>
                </div>
                <div className="log-in-opt-box">
                    <a className="log-in" style={{background: "#3978E5"}}>
                        <img className="log-in-img" src="/static/images/facebookIcon.png"></img>
                        <span className="log-in-text">LOG IN WITH FACEBOOK</span>
                    </a>
                    <a style={{color: "#000000", fontSize: "18px", fontWeight:"100", fontFamily: "Roboto"}}>or</a>
                    <a className="log-in" style={{background: "#EC5656"}}>
                        <img className="log-in-img" src="/static/images/googleIcon.png"></img>
                        <span className="log-in-text">LOG IN WITH GOOGLE</span>
                    </a>
                    <img className="log-in-game-icon" src="/static/images/flux.png"/>
                    <img className="log-in-game-icon" src="/static/images/kryp.png"/>
                    <img className="log-in-game-icon" src="/static/images/hash.png"/>
                    <img className="log-in-game-icon" src="/static/images/ech2.png"/>
                    <img className="log-in-game-icon" src="/static/images/bull5.png"/>
                </div>
            </div>
        );
    }
}
