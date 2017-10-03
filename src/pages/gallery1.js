import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImages } from "../actions/gallery-actions";

import Logobar from "../partials/logo-bar";

import GalleryImageGrid from "../partials/gallery-img-grid";
import GalleryCarousal from "../partials/gallery-carousal";

import "../styles/gallery1.css";

@connect(store => {
	return {
		images: store.gallery.images,
		fetched: store.gallery.fetched,
		fetching: store.gallery.fetching
	};
})
export default class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedImage: 0
		};
	}

	componentWillMount() {
		this.props.dispatch(fetchImages());
	}

	changeSelectedImage(i) {
		this.setState({
			...this.state,
			selectedImage: i
		});
	}

	render() {
		console.log("selected img:", this.state.selectedImage);
		return (
			<div className="row gallery-container">
				<Logobar />
				<div className="col-xs-12">
					<h1 className="gallery-heading">Gallery</h1>
				</div>
				<div className="col-xs-12 col-md-8">
					<GalleryCarousal
						images={this.props.images}
						selectedImage={this.state.selectedImage}
					/>
				</div>
				<div className="col-xs-12 col-md-4">
					<GalleryImageGrid
						images={this.props.images}
						onSelectImage={this.changeSelectedImage.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
