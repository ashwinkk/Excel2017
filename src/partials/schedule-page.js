import React from "react";
import { Link } from "react-router-dom";

import ScheduleCard from "../partials/schedule-card.js";

import "../styles/schedule.css";

export default class SchedulePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filter: "All"
        };
    }
    changeFilter(e){
        console.log(e);
        this.setState({filter: e});
    }
    render(){
        let events;
        let filter = this.state.filter;
        let parent = this;
        if(this.state.filter == "All"){
            events = this.props.events.map((obj, i) => (
                <ScheduleCard key={i} event={obj} active={true}/>
            ));
        }
        else{
            events = this.props.events.map(function(obj, i){
                return(<ScheduleCard key={i} event={obj} active={obj.type == filter}/>);
            });
        }
        let filter_tags = ["All", "Computer Science", "Electronics", "Robotics", "Non-Tech"];
        let filters = filter_tags.map(function(obj,i){
            let style= "category" + (parent.state.filter == obj?" active":"");
            return(<a className={style} onClick={parent.changeFilter.bind(parent, obj)}>{obj}</a>);
        });
        return(
            <div className="tab-panes">
              <div className="left-panel">
                  {filters}
              </div>
              <div className="right-panel">
                  {events}
              </div>
            </div>
        );
    }
}
