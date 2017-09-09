import React from "react";

import "../styles/spotlight.css"

export default class SpotlightCard extends React.Component{
    render(){
        return(
            <div className="spotlight-card" style={{background: this.props.bgcolor}}>
                <div className="spotlight-card-left">
                    <img className="spotlight-card-thumbnail" src={this.props.thumbnail}></img>
                </div>
                <div className="spotlight-card-right">
                    <h1 className="spotlight-card-title">{this.props.title}</h1>
                    <a className="spotlight-card-overview">{this.props.overview}</a>
                    <a className="spotlight-card-register" href={this.props.registerLink} target="_blank" >Register</a>
                </div>
            </div>
        );
    }
}
