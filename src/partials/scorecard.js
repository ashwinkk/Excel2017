import React from "react";

import "../styles/scorecard.css"

export default class Scorecard extends React.Component {
    render(){
        return(
            <div className="scorecard">
                <img className="scorecard-game-img" src={this.props.img}/>
                <div className="scorecard-right">
                    <h2 className="scorecard-game">{this.props.name}</h2>
                    <h1 className="scorecard-score">{this.props.score}</h1>
                    <a className="scorecard-play">Play</a>
                </div>
            </div>
        )
    }
}
