import React from "react";
import { Link } from "react-router-dom";

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
                    <Link className="spotlight-card-register" to={this.props.registerLink}>Register</Link>
                </div>
            </div>
        );
    }
}
