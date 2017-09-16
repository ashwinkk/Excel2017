import React from "react";
import GoogleMap from "google-map-react";
import { connect } from "react-redux";

import "../styles/summit.css";

@connect(store => {
	store.navbar.backgroundColor;
})
class Summit extends React.Component {
	componentDidMount() {
		document.getElementById("root").style.backgroundColor =
			"rgba(10, 10, 10, 1)";
		this.props.dispatch({
			type: "SET_THEME",
			payload: { fontColor: "white", backgroundColor: "#171717" }
		});
	}
	componentWillUnmount() {
		document.getElementById("root").style.backgroundColor = "transparent";
		this.props.dispatch({
			type: "RESET_THEME"
		});
	}
	render() {
		let defaultLoc = {
			center: { lat: 9.988312, lng: 76.301134 },
			zoom: 15
		};
		let speakers = [
			{
				name: "Dr. Hiranmay Ghosh",
				pic: "/static/summit/s1.png",
				post: "Research Advisor",
				company: "TCS"
			},
			{
				name: "Soj Thomas",
				pic: "/static/summit/s2.png",
				post: "Chief Technology Expert",
				company: "Bosch"
			},
			{
				name: "Prasanna Lohar",
				pic: "/static/summit/s3.png",
				post: "Head of Technology",
				company: "DCB Bank"
			},
			{
				name: "Lentin Joseph",
				pic: "/static/summit/s4.png",
				post: "CEO",
				company: "Qbotics Labs"
			},
			{
				name: "Tushar Chhabra",
				pic: "/static/summit/s5.png",
				post: "CEO",
				company: "Cron Systems"
			},
			{
				name: "Dr. L.V Subramaniam",
				pic: "/static/summit/s6.png",
				post: "Senior Manager of Engineering and Data Platforms",
				company: "IBM"
			},
			{
				name: "Fariz Rahman",
				pic: "/static/summit/s7.png",
				post: "Machine Learning Engineer",
				company: "OlaSearch"
			}
		];
		let speakerMarkup = speakers.map((speaker, index) => {
			return (
				<div
					className="col-lg-4 col-md-4 col-sm-6 col-xs-12 speaker"
					key={index}
				>
					<img src={speaker.pic} />
					<h3>{speaker.name}</h3>
					<h4>{speaker.post}</h4>
					<p>{speaker.company}</p>
				</div>
			);
		});
		let table1 = [
			{
				time: "09:30-10:00 am",
				type: "Keynote address",
				speaker: "Introduction to AI and The AI boom - Soj Thomas"
			},
			{
				time: "10:10-11:50 am",
				type: "Invited Speaker",
				speaker: "AI Cognitive Computer Vision - Hiranmay Ghosh"
			}
		];
		let table2 = [
			{
				time: "11:10-11:40 am",
				type: "Invited Speaker",
				speaker:
					"Financial​ ​security:​ ​AI​ ​a​ ​game​ ​changer​? - Prasanna Lohar"
			},
			{
				time: "11:50-12:20 am",
				type: "Invited Speaker",
				speaker: "Hybrid​ ​Workforce:​ ​Robots,Human​ ​and​ ​AI - Lentin joseph"
			}
		];
		let table3 = [
			{
				time: "01:30-02:00 pm",
				type: "Fireside chat",
				speaker: "AI​ ​in​ ​Defence - ​Tushar Chabra"
			},
			{
				time: "02:10-02:40​ ​pm",
				type: "Invited Speaker",
				speaker: "How​ ​AI​ ​impact​ ​businesses - L.V Subramaniam"
			}
		];
		let table4 = [
			{
				time: "02:55-03:25​ ​pm",
				type: "Invited Speaker",
				speaker: "Stepping​ ​into​ ​AI - Fariz Rahman"
			},
			{
				time: "03:40-04:10​ pm",
				type: "Panel Discussion",
				speaker: "The​ ​Future​ ​of​ ​AI:​ ​Good​ ​and​ ​the​ ​Ugly"
			}
		];
		let tableMarkup1 = table1.map((value, index) => {
			let topic = value.speaker.split("-"),
				speaker = "";
			if (topic.length > 1) speaker = ` - ${topic[1]}`;
			topic = topic[0];
			return (
				<tr key={index}>
					<td>{value.time}</td>
					<td>{value.type}</td>
					<td style={{ width: "60%" }}>
						<strong>{topic}</strong>
						{speaker}
					</td>
				</tr>
			);
		});
		let tableMarkup2 = table2.map((value, index) => {
			let topic = value.speaker.split("-"),
				speaker = "";
			if (topic.length > 1) speaker = ` - ${topic[1]}`;
			topic = topic[0];
			return (
				<tr key={index}>
					<td>{value.time}</td>
					<td>{value.type}</td>
					<td style={{ width: "60%" }}>
						<strong>{topic}</strong>
						{speaker}
					</td>
				</tr>
			);
		});
		let tableMarkup3 = table3.map((value, index) => {
			let topic = value.speaker.split("-"),
				speaker = "";
			if (topic.length > 1) speaker = ` - ${topic[1]}`;
			topic = topic[0];
			return (
				<tr key={index}>
					<td>{value.time}</td>
					<td>{value.type}</td>
					<td style={{ width: "60%" }}>
						<strong>{topic}</strong>
						{speaker}
					</td>
				</tr>
			);
		});
		let tableMarkup4 = table4.map((value, index) => {
			let topic = value.speaker.split("-"),
				speaker = "";
			if (topic.length > 1) speaker = ` - ${topic[1]}`;
			topic = topic[0];
			return (
				<tr key={index}>
					<td>{value.time}</td>
					<td>{value.type}</td>
					<td style={{ width: "60%" }}>
						<strong>{topic}</strong>
						{speaker}
					</td>
				</tr>
			);
		});
		let contacts = [
			{
				name: "Gautham Dinanath",
				phno: "+91 7736787858"
			},
			{
				name: "Anurith R",
				phno: "+91 8547179483"
			}
		];
		let contactMarkup = contacts.map((contact, index) => {
			return (
				<div
					className="col-lg-6 col-md-6 col-sm-6 col-xs-12 contact"
					key={index}
				>
					<h3>{contact.name}</h3>
					<p>{contact.phno}</p>
				</div>
			);
		});
		let key = "AIzaSyAjW-rODOOcCjvnHA-mGtYYtfEf6RUeogE";
		return (
			<div className="summit">
				<div className="container-fluid cover">
					<div className="overlay" />
					<div className="container">
						<img src="/static/sponsors/bosch.png" className="sponsor" />
						<span>presents</span>
						<img src="/static/summit/ai.png" />
					</div>
				</div>
				<div className="container-fluid ai-content">
					<div className="container">
						<section className="home-content">
							<h3>
								Are machines actually better than us at creativity. So what is
								left for us to do?
							</h3>
							<p className="intro-content">
								When it comes to the possibilities of Artificial Intelligence,
								there may be a lot of opinions out there. It is a field which
								expands human capability beyond our imagination. We’re entering
								the world where AI will be ubiquitous.The pace of this progress
								is incredible, and close to exponential. AI has been conquering
								every sector imaginable and is being preached upon by leading
								organisations who is looking to reach unrivalled efficiency. So
								is AI the future? Will it decide the fate of humanity?
							</p>
							<p className="lead">
								Excel 2017, presents 'The AI Summit' hoping to excite and
								educate you about the numerous applications, possibilities and
								perils in the field of AI.
							</p>
						</section>
					</div>
				</div>
				<section className="venue-container container-fluid">
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 map-container">
								<GoogleMap
									bootstrapURLKeys={{
										key: "AIzaSyCibUuR_rLDk9Xgcl9FXblSd943Z54rtcw"
									}}
									defaultCenter={defaultLoc.center}
									defaultZoom={defaultLoc.zoom}
									marker
								>
									<MapWrapper
										lat={defaultLoc.center.lat}
										lng={defaultLoc.center.lng}
										text="IMA Kochi"
									/>
								</GoogleMap>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 venue-desc">
								<h1>Venue</h1>
								<h2>IMA House,</h2>
								<h3>Kaloor, Kochi</h3>
							</div>
						</div>
					</div>
					<div className="overlay-venue" />
					<div className="overlay-venue1" />
				</section>
				<div className="container-fluid ai-content">
					<div className="container">
						<section className="speakers-container">
							<h2 className="text-center">Speakers</h2>
							<div className="row">{speakerMarkup}</div>
						</section>
						<section className="schedule-container">
							<h2 className="text-center">Schedule</h2>
							{/*<h4>
								<strong>Session 1</strong>
							</h4>*/}
							<table className="table table-condensed">
								<tbody>{tableMarkup1}</tbody>
							</table>
							<p className="text-center ">11:00-11:10​ ​am​ : Tea ​Break</p>
							{/*<h4>
								<strong>Session 2</strong>
							</h4>*/}
							<table className="table table-condensed">
								<tbody>{tableMarkup2}</tbody>
							</table>
							<p className="text-center ">​12:30-01:30​ ​pm : Lunch Break</p>
							{/*<h4>
								<strong>Session 3</strong>
							</h4>*/}
							<table className="table table-condensed">
								<tbody>{tableMarkup3}</tbody>
							</table>
							<p className="text-center ">02:45-02:55​ ​pm​ ​ : Break</p>
							{/*<h4>
								<strong>Session 4</strong>
							</h4>*/}
							<table className="table table-condensed">
								<tbody>{tableMarkup4}</tbody>
							</table>
							<p className="text-center ">04:20-4:25 pm : Closing Note</p>

							<a
								className="register_button"
								target="_blank"
								href="https://goo.gl/forms/xeiZh6D07AmthK8t1"
							>
								Register
							</a>
							<h4 className="text-center">Registration fees Rs 750/-</h4>
							<p className="text-center">(inclusive of lunch and tea)</p>
						</section>
						<section className="contacts-container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<h2 className="text-center">Contacts</h2>
									{contactMarkup}
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 brain">
									<div className="overlay" />
									<img src="/static/summit/brain.png" />
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		);
	}
}

function MapWrapper(props) {
	return (
		<div
			className="map-text"
			style={{
				width: "30px",
				height: "30px"
			}}
		>
			<img src="/static/summit/map-pin.png" />
		</div>
	);
}

export default Summit;
