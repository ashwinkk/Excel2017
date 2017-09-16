import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/lib/fa";

import "../styles/about-card.css";

const AboutCard = props => (
	<div className="col-xs-12 col-sm-6 col-md-4 about-card-container">
		<div className="about-card">
			<img className="card-img" src={props.image.src} alt={props.image.alt} />
			<div className="card-desc">
				<div className="row">
					<div className="col-xs-12">
						<h3 className="name">{props.designation}</h3>
						<h4 className="designation">{props.name}</h4>
						<h5 className="email">
							<a href={"mailto:" + props.contact.email}>
								{props.contact.email}
							</a>
						</h5>
						<h5 className="phone">
							<a href={"tel:" + props.contact.phone}>{props.contact.phone}</a>
						</h5>
					</div>
				</div>
				<div className="social-icons">
					{["facebook", "github", "linkedin"].map((val, i) => {
						const icons = {
							facebook: <FaFacebook />,
							linkedin: <FaLinkedin />,
							github: <FaGithub />
						};
						const url = props.social[val];

						if (url) {
							return (
								<a key={i} href={url} target="_blank">
									{icons[val]}
								</a>
							);
						}
						return "";
					})}
				</div>
			</div>
		</div>
	</div>
);

export default AboutCard;
