import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/gallery-carousal.css";

export default class GalleryCarousal extends Component{

    render(){

        const images = this.props.images.map((img,i) => (
            <div key={i}>
                <img className="slider-image" src={img.url} alt={img.alt}/>
                <h3 className="slider-desc">{img.desc}</h3>
            </div>
        ));
        return (
            <div className="slider-container">
                <Slider
                    arrows={false}
                    dots={false}
                    lazyLoad={true}
                    pauseOnHover={true}
                    swipeToSlide={true}
                    slickGoTo={this.props.selectedImage}
                    autoplay={true}
                    autoplaySpeed={2000}
                    fade={true}
                >
                {images}
                </Slider>
            </div>
        );
    }
}