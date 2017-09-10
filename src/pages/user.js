import React from "react";
import Scorecard from "../partials/scorecard"
import "../styles/user.css"

export default class User extends React.Component{
    render(){
        return (
            <div style={{marginTop:"100px", width:"100%", textAlign:"center", background:"black"}}>
                <div className="usr-left-panel">
                    <div className="usr-img-box">
                        <img src="/static/images/pp.jpg" className="usr-img"/>
                        <img src="/static/images/usrImgOverlay.png" className="usr-img-overlay"/>
                    </div>
                    <h1 className="usr-name">George Thomas Shanti</h1>
                </div>
                <div className="usr-right-panel">
                    <Scorecard name="Dalal Bull" score="1000" img="/static/images/bull5.png" />
                    <Scorecard name="Echo" score="1000" img="/static/images/ech2.png" />
                    <Scorecard name="Flux" score="1000" img="/static/images/flux.png" />
                    <Scorecard name="Hash Include" score="1000" img="/static/images/hash.png" />
                    <Scorecard name="Convolution" score="1000" img="/static/images/nn5.png" />
                    <Scorecard name="Kryptos" score="1000" img="/static/images/kryp.png" />
                </div>
            </div>
        );
    }
}
