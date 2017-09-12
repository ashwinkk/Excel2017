import React from "react";
import ReactDOM from "react-dom";

import "../styles/gallery-thumbnail.css";

export default class GalleryThumbnail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			left: 0,
			style: {},
			render: false
		};
		this.setWidths = this.setWidths.bind(this);
	}

	setWidths() {
		let image = ReactDOM.findDOMNode(this.refs["thumb-image"]);
		let dimensions = image.getBoundingClientRect();
		console.log(dimensions);
		if (dimensions.width > image.offsetHeight)
			this.setState({
				style: { height: "100%", transform: "translateX(-25%)" }
			});
		else if (dimensions.width < dimensions.offsetHeight)
			this.setState({
				style: { width: "100%", transform: "translateY(25%)" }
			});
		else this.setState({ style: { width: "100%" } });
	}

	componentDidMount() {
		this.setWidths();
	}

	componentWillReceiveProps(nextProps) {
		this.setWidths();
	}

	render() {
		return (
			<div
				ref="thumb"
				className="gallery-thumbnail"
				onClick={this.props.onClick}
				style={this.props.style}
			>
				<img ref="thumb-image" src={this.props.url} style={this.state.style} />
			</div>
		);
	}
}
