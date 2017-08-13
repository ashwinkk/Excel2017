import React, {Component} from "react";
import DateBetween from "../helpers/datebetween";

export default class CountDown extends Component{
    constructor(props){
        super(props);
        this.state = {
            remaining: null
        };
        // console.log("ctor");
    }

    componentDidMount(){
        this.tick();
        this.interval = setInterval(this.tick.bind(this),1000); // tick every second
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick(){
        let startDate = Date.now();
        let endDate = new Date(this.props.options.endDate);
        let remaining = DateBetween(startDate,endDate);

        if(remaining === false){
            clearInterval(this.interval);
        }
        this.setState({remaining});
        // console.log("tick");
    }

    render(){
        let remaining = this.state.remaining;
        // console.log("tick",this.state);
        
        if(remaining === null){
            return (<div>nothing</div>);
        }
        return(
            <div>
                {remaining.days} days, {remaining.hours} hours, {remaining.minutes} mins, {remaining.seconds} s
            </div>
        );
    }
}