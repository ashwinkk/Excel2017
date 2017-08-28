import React from "react";
import GoogleMap from "google-map-react";

import "../styles/summit.css";

class Summit extends React.Component {
	componentDidMount() {
		document.getElementById("root").style.backgroundColor =
			"rgba(10, 10, 10, 1)";
	}
	componentWillUnmount() {
		document.getElementById("root").style.backgroundColor = "transparent";
	}
	render() {
		let defaultLoc = {
			center: { lat: 9.988312, lng: 76.301134 },
			zoom: 15
		};
		let speakers = [
			{
				name: "Hiranmay Ghosh",
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
				name: "Tushar Chabra",
				pic: "/static/summit/s5.png",
				post: "CEO",
				company: "Cron Systems"
			},
			{
				name: "L.V Subramaniam",
				pic: "/static/summit/s6.png",
				post: "Senior Manager of Engineering and Data Platforms",
				company: "IBM"
			},
			{
				name: "Fariz Rahman",
				pic: "/static/summit/s7.png",
				post: "Machine Learning Engineer",
				company: "Datalogai"
			}
		];
		let speakerMarkup = speakers.map((speaker, index) => {
			return (
				<div
					className="col-lg-4 col-md-4 col-sm-6 col-xs-12 speaker"
					key={index}
				>
					<img src={speaker.pic} />
					<h3>
						{speaker.name}
					</h3>
					<h4>
						{speaker.post}
					</h4>
					<p>
						{speaker.company}
					</p>
				</div>
			);
		});
		let table1 = [
			{
				time: "09:55-10:25 am",
				type: "Keynote address",
				speaker: "Soj Thomas- Introduction to AI and The AI boom"
			},
			{
				time: "10:30-11:00 am",
				type: "Invited Speaker 1",
				speaker: "Hiranmay Ghosh-Visual cognition in AI"
			},
			{
				time: "11:00-11:10 am",
				type: "",
				speaker: "Trivia or Quiz / Break / Video session"
			},
			{
				time: "11:10-11:40 am",
				type: "Invited Speaker 2",
				speaker: "Lentin joseph- Robots and AI"
			},
			{
				time: "11:45-12:15 pm",
				type: "Fireside chat",
				speaker: "Tushar Chabra- Start up Scenario"
			},
			{
				time: "12:15-12:30 pm",
				type: "",
				speaker: "Trivia or Quiz / Video session"
			}
		];
		let tableMarkup1 = table1.map((value, index) => {
			return (
				<tr key={index}>
					<td>
						{value.time}
					</td>
					<td>
						{value.type}
					</td>
					<td style={{ width: "60%" }}>
						{value.speaker}
					</td>
				</tr>
			);
		});
		let table2 = [
			{
				time: "01:35-02:05 pm",
				type: "Invited Speaker 3",
				speaker:
					"L.V Subramaniam- How AI can be incorporated in business and related technologies"
			},
			{
				time: "02:10-02:40 pm",
				type: "Invited Speaker 4",
				speaker:
					"Prasanna Lohar-Blockchain and  effect of AI in financial security"
			},
			{
				time: "02:40-02:50 pm",
				type: "",
				speaker: "Trivia or Quiz / Video session"
			},
			{
				time: "02:50-03:20 pm",
				type: "",
				speaker: "Panel Discussion - { The Future of AI}"
			},
			{
				time: "03:30-03:40 pm",
				type: "",
				speaker: "Closing note"
			}
		];
		let tableMarkup2 = table2.map((value, index) => {
			return (
				<tr key={index}>
					<td>
						{value.time}
					</td>
					<td>
						{value.type}
					</td>
					<td style={{ width: "60%" }}>
						{value.speaker}
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
					<h3>
						{contact.name}
					</h3>
					<p>
						{contact.phno}
					</p>
				</div>
			);
		});
		let key = "AIzaSyAjW-rODOOcCjvnHA-mGtYYtfEf6RUeogE";
		return (
			<div className="summit">
				<div className="container-fluid cover">
					<div className="overlay" />
					<div className="container">
						<img src="/static/summit/ai.png" />
					</div>
				</div>
				<div className="container-fluid ai-content">
					<div className="container">
						<section className="home-content">
							<h4>
								Are machines actually better than us at creativity. So what is
								left for us to do?
							</h4>
							<p>
								When it comes to the possibilities of Artificial Intelligence,
								there may be a lot of opinions out there. It is a field which
								expands human capability beyond our imagination. We’re entering
								the world where AI will be ubiquitous.The pace of this progress
								is incredible, and close to exponential. AI has been conquering
								every sector imaginable and is being preached upon by leading
								organisations who is looking to reach unrivalled efficiency.Is
								AI the future ? Will decide the fate of humanity?
							</p>
							<p>
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
								<h1>
									September 23<sup>rd</sup>
								</h1>
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
							<div className="row">
								{speakerMarkup}
							</div>
						</section>
						<section className="schedule-container">
							<h2 className="text-center">Schedule</h2>
							<h3>Session 1</h3>
							<table className="table table-condensed">
								<tbody>
									{tableMarkup1}
								</tbody>
							</table>
							<p className="text-center lead">12:30-01:30 : Lunch Break</p>
							<h3>Session 2</h3>
							<table className="table table-condensed">
								<tbody>
									{tableMarkup2}
								</tbody>
							</table>
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
