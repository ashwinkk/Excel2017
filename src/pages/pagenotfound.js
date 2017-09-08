import React from "react";

import "../styles/page-not-found.css"

export default function Events(props) {
	return (
        <div className="page-not-found-container">
			<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>
			<img src="/static/images/404 r2.png" className="r2-image"/>
			<h1 className="page-not-found-title">404 - PAGE NOT FOUND</h1>
			<span className="page-not-found-subtitle">R2-D2 searched the entire website and couldn't find what you were looking for. We'll call C-3PO next time. Sorry</span>
        </div>
    );
}
