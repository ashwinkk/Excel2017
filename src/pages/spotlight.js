import React from "react";

import SpotlightCard from "../partials/spotlight-card.js"

class Spotlight extends React.Component{

	constructor() {
		super();
		/*var containerStyle={
			textAlign: "center"
		};*/
		this.state = {items: []};
	}

	componentWillMount(){

		fetch('/assets/spotlight.json')
		.then(results => {
			return results.json();
		}).then(data => {
			console.log(data);
			let cards = data.map( (obj, i) => <SpotlightCard title={obj.title} key={obj.id} overview={obj.overview} thumbnail={obj.thumbnail} bgcolor={obj.bgcolor}/> );
			this.setState({items : cards});
		});
	}

	render() {
		return (
			<div className="spotlight-container" style={{textAlign: "center"}}>
				{this.state.items}
			</div>
		);
	}
}

export default Spotlight;
