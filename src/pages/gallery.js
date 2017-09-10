import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchImages } from "../actions/gallery-actions";

import GalleryThumbnail from "../partials/gallery-thumbnail.js";

import "../styles/gallery.css";

@connect(store => {
	return {
		images: store.gallery.images,
		fetched: store.gallery.fetched,
		fetching: store.gallery.fetching
	};
})
class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			render: false,
			viewPort: {},
			selectedImage: "",
			selectedIndex: 0,
			pos: 0
		};
		this.prevWidth = 0;
		this.pos = 0;
		this.thumbnails = [];
		this.selectedIndex = -1;
		this.imageView = this.imageView.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.collectWidth = this.collectWidth.bind(this);
		this.slideShow = this.slideShow.bind(this);
	}

	componentWillMount() {
		this.props.dispatch(fetchImages());
	}

	componentWillUnMount() {
		clearInterval(this.interval);
	}

	slideShow() {
		let update =
			this.state.selectedIndex === this.props.images.length - 1
				? 0
				: this.state.selectedIndex + 1;
		this.setState({
			selectedImage: this.props.images[this.state.selectedIndex].url,
			selectedIndex: update
		});
	}

	componentDidMount() {
		if (window.innerWidth > 800)
			this.interval = setInterval(this.slideShow, 4000);
		// let height = document.getElementById("gallery-container").offsetHeight;
		// console.log(height);
		// if (window.innerWidth > 1000) {
		// 	this.unitHeight = height / 6;
		// 	console.log("something");
		// } else {
		// 	this.unitHeight = height / 3;
		// }
		// this.setState({ renderPosition: true });
	}

	imageView(e, index) {
		let viewportContainer = ReactDOM.findDOMNode(
			this.refs["viewport-container"]
		);
		console.log(viewportContainer);
		let element = e.target;
		let elem = document.getElementById("viewport-image");
		if (window.innerWidth < 600) {
			elem.src = element.src;
			this.thumbPosition = element.getBoundingClientRect();
			let viewPosition = elem.getBoundingClientRect();
			let orientation =
				window.innerWidth - viewPosition.width <
				window.innerHeight - viewPosition.height
					? "landscape"
					: "portrait";
			if (!elem.classList.contains(orientation)) {
				elem.classList.remove("landscape", "portrait");
				elem.classList.add(orientation);
			}
			viewPosition = elem.getBoundingClientRect();
			this.scale = this.thumbPosition.height / viewPosition.height;
			this.setState((prevState, props) => {
				return {
					...prevState,
					imageStyle: {
						transform:
							"translate(" +
							(this.thumbPosition.left - viewPosition.left) +
							"px," +
							(this.thumbPosition.top - viewPosition.top) +
							"px)scale(" +
							this.scale +
							")"
					}
				};
			});
			let animatedStyle = "";
			this.setState((prevState, props) => {
				return {
					...prevState,
					viewPort: {
						zIndex: 1
					}
				};
			});
			setTimeout(() => {
				this.setState((prevState, props) => {
					this.viewPosition = document
						.getElementById("viewport-image")
						.getBoundingClientRect();
					return {
						...prevState,
						imageStyle: {
							transition: "all 0.5s",
							transform: "translate(0,0)scale(1)"
						}
					};
				});
			}, 100);
		} else {
			if (this.props.images.length - 1 === index) index = -1;
			clearInterval(this.interval);
			this.setState({ selectedImage: element.src, selectedIndex: index + 1 });
			setInterval(this.slideShow, 4000);
		}
	}

	handleClose() {
		let viewPosition = document
			.getElementById("viewport-image")
			.getBoundingClientRect();
		console.log(viewPosition);
		this.setState({
			imageStyle: {
				transform:
					"translate(" +
					(this.thumbPosition.left - viewPosition.left) +
					"px," +
					(this.thumbPosition.top - viewPosition.top) +
					"px)scale(" +
					this.scale +
					")",
				transition: "all 0.5s"
			}
		});
		setTimeout(() => {
			this.setState((prevState, props) => {
				return {
					...prevState,
					viewPort: {
						zIndex: -1
					},
					imageStyle: {
						transform: "none"
					}
				};
			});
		}, 500);
	}

	renderStart() {
		this.setState({
			render: true,
			selectedImage: this.thumbnails[0]
		});
	}

	collectWidth(index, width, height) {
		this.setState((prevState, props) => {
			if (prevState.count == 17)
				return {
					...prevState,
					count: prevState.count + 1,
					pos: prevState.coords.filter((obj, index) => {
						obj.width = width;
						obj.height = height;
						return true;
					})
				};
		});
	}

	render() {
		if (this.props.fetching) {
			return <h1>Loading....</h1>;
		}
		let pos = 0;
		let images = this.props.images.map((link, index) => {
			let thumb = (
				<GalleryThumbnail
					key={index}
					url={link.url}
					onClick={e => this.imageView(e, index)}
				/>
			);
			return thumb;
		});
		return (
			<div className="gallery-container" id="gallery-container">
				<ViewPort
					ref="viewport-container"
					src={this.state.selectedImage}
					alt={this.state.selectedImage}
					style={this.state.viewPort}
					onClose={this.handleClose}
					imageStyle={this.state.imageStyle}
				/>
				<div className="gallery">{images}</div>
			</div>
		);
	}
}

function GridRight(props) {}

class ViewPort extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageSrc: ""
		};
	}
	componentWillReceiveProps(nextProps) {
		let viewportImage = ReactDOM.findDOMNode(this.refs["viewport-image"]);
		let viewportDescription = ReactDOM.findDOMNode(
			this.refs["viewport-description"]
		);
		viewportImage.classList.add("animate-exit");
		viewportDescription.classList.add("animate-exit");
		setTimeout(() => {
			viewportImage.style.transition = "none";
			viewportDescription.style.transitionProperty = "none";
			viewportImage.classList.remove("animate-exit");
			viewportDescription.classList.remove("animate-exit");
			// elem.src = element.src;
			this.setState({ imageSrc: nextProps.src });
			viewportImage.classList.add("animate-entry");
			viewportDescription.classList.add("animate-entry");
		}, 500);
		setTimeout(() => {
			viewportImage.style.transition = "opacity 0.3s, transform 0.3s";
			viewportDescription.style.transitionProperty = "opacity, transform";
			viewportImage.classList.remove("animate-entry");
			viewportDescription.classList.remove("animate-entry");
		}, 600);
	}
	render() {
		return (
			<div
				className="viewport-container"
				style={this.props.style}
				ref="viewport-container"
			>
				<div className="viewport">
					<img
						id="viewport-image"
						src={this.state.imageSrc}
						style={this.props.imageStyle}
						alt={this.props.src}
						ref="viewport-image"
					/>
					<div className="viewport-description" ref="viewport-description">
						<p>{this.props.src}</p>
					</div>
				</div>
				<div className="close-button">
					<span onClick={this.props.onClose}>&times;</span>
				</div>
			</div>
		);
	}
}

export default Gallery;
