import React from "react";

import "../styles/spotlight.css"

export default class SpotlightCard extends React.Component{
    render(){
        return(
            <div className="spotlight-card" style={{background: this.props.bgcolor}}>
                <div className="spotlight-card-left">
                    <a href={"/spotlight/" + this.props.id}><img className="spotlight-card-thumbnail" src={this.props.thumbnail}></img></a>
                </div>
                <div className="spotlight-card-right">
                    <a href={"/spotlight/" + this.props.id}><h1 className="spotlight-card-title">{this.props.title}</h1></a>
                    <a className="spotlight-card-overview">{this.props.overview}</a>
                    <a className="spotlight-card-register" href={this.props.registerLink}>Register</a>
                </div>
            </div>
        );
    }
}
