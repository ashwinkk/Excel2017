import React from "react";

import "../styles/events.css"

export default class EventCard extends React.Component{
    render(){
        return(
            <div className="event-card" style={{background: this.props.bgcolor}}>
                <div className="event-card-left">
                    <img className="event-card-thumbnail" src={this.props.thumbnail}></img>
                </div>
                <div className="event-card-right">
                    <h1 className="event-card-title">{this.props.title}</h1>
                    <a className="event-card-overview">{this.props.overview}</a>
                    <a className="event-card-register" href={this.props.registerLink} target="_blank" >Register</a>
                </div>
            </div>
        );
    }
}
