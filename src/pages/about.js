import React, {Component} from "react";

import AboutCard from "../partials/about-card";

import "../styles/about.css";

export default class About extends Component{
    render(){
        return (
        <div className="row about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-wrapper">  
                <AboutCard
                    image={{
                        src: "https://dummyimage.com/453x385/2363a3/fff.png",
                        alt:"dummy"
                    }}
                    contact={{
                        email: "someone@somewhere.com",
                        phone: "+91 8989898989"
                    }} 

                    name={"Your Name"}
                    designation={"lorem ipsum"}
                />
                <AboutCard
                    image={{
                        src: "https://dummyimage.com/453x385/2363a3/fff.png",
                        alt:"dummy"
                    }}
                    contact={{
                        email: "someone@somewhere.com",
                        phone: "+91 8989898989"
                    }} 

                    name={"Your Name"}
                    designation={"lorem ipsum"}
                />
                <AboutCard
                    image={{
                        src: "https://dummyimage.com/453x385/2363a3/fff.png",
                        alt:"dummy"
                    }}
                    contact={{
                        email: "someone@somewhere.com",
                        phone: "+91 8989898989"
                    }} 

                    name={"Your Name"}
                    designation={"lorem ipsum"}
                />
                <AboutCard
                    image={{
                        src: "https://dummyimage.com/453x385/2363a3/fff.png",
                        alt:"dummy"
                    }}
                    contact={{
                        email: "someone@somewhere.com",
                        phone: "+91 8989898989"
                    }} 

                    name={"Your Name"}
                    designation={"lorem ipsum"}
                />
                <AboutCard
                    image={{
                        src: "https://dummyimage.com/453x385/2363a3/fff.png",
                        alt:"dummy"
                    }}
                    contact={{
                        email: "someone@somewhere.com",
                        phone: "+91 8989898989"
                    }} 

                    name={"Your Name"}
                    designation={"lorem ipsum"}
                />
                <AboutCard
                    image={{
                        src: "https://dummyimage.com/453x385/2363a3/fff.png",
                        alt:"dummy"
                    }}
                    contact={{
                        email: "someone@somewhere.com",
                        phone: "+91 8989898989"
                    }} 

                    name={"Your Name"}
                    designation={"lorem ipsum"}
                />
            </div>
        </div>
        );
    }
}