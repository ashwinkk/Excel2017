import React, { Component } from "react";

import "../styles/gallery-img-grid.css";


export default class GalleryImageGrid extends Component{

    handleImageSelect(id){
        if(this.props.onSelectImage){
            this.props.onSelectImage(id);
        }
    }

    render(){
        const images = this.props.images.map((img,i) => (
            <div key={i} className="col-xs-4 grid-img" onClick={() => this.handleImageSelect(i)}>
                <img className="" src={img.url} alt={img.alt}/>
            </div>
        ));

        return(
            <div className="row gallery-grid-container">
                {images}
            </div>
        );
    }
    
}