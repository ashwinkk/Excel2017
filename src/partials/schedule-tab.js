import React from "react";
import { Link } from "react-router-dom";

import "../styles/schedule.css";

export default class ScheduleTab extends React.Component {
    changePage(){
        this.props.click(this.props.index);
    }
    render(){
        let style = "tab" + (this.props.active?" tab-active":"");
        return(
          <a className={style} onClick={this.changePage.bind(this)}>{this.props.day} {this.props.key}</a>
        );
    }
}
