import React, { Component } from "react";


import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CompetitionDropdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            itemSelected: props.items[0].value
        }
    }


    handleChange(e,i,val){
        this.setState({itemSelected: val});
        this.props.getValue(val);
    }

    render(){

        return(
            <DropDownMenu 
                value={this.state.itemSelected} 
                onChange={this.handleChange.bind(this)}
            >
                {this.props.items.map((item,i) => (
                    <MenuItem key={i} value={item.value} label={item.label} primaryText={item.text || item.label} />
                ))}
            </DropDownMenu>
        );
    }


}