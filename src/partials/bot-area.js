import React from "react";
import ReactDOM from "react-dom";
import SpeechRecognition from "react-speech-recognition";
import { FaMicrophone } from "react-icons/lib/fa";
import { connect } from "react-redux";

import { fetchReply } from "../actions/bot-actions.js";
import "../styles/bot-area.css";

const Dots = props => (
	<div id="wave">
		<span className="dot" />
		<span className="dot" />
		<span className="dot" />
	</div>
);

// const ListenButton = (props) => (
// 	<div className="listen-btn" onClick={props.listenOnClick}>
// 		<FaMicrophone/>
// 	</div>
// );

@connect(store => {
	return {
		replyText: store.bot.replyText,
		fetchingReply: store.bot.fetchingReply,
		fetchedReply: store.bot.fetchedReply
	};
})
@SpeechRecognition({
	autoStart: false
})
class BotChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userText: "",
			useVoiceInput: false,
			typedEntry: false,
			redirect: false,
			mounted: false,
			url: ""
		};
		this.urls = {
			General: "competitions",
			Robotics: "competitions",
			Workshops: "spotlight",
			Electronics: "competitions"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleTheSpeechInput = this.handleTheSpeechInput.bind(this);
		this.recordToggle = this.recordToggle.bind(this);
		this.close = this.close.bind(this);
	}

	componentDidMount() {
		this.handleTheSpeechInput = this.handleTheSpeechInput.bind(this);

		this.setState({
			...this.state,
			useVoiceInput: this.props.browserSupportsSpeechRecognition,
			mounted: true
		});

		if (this.props.browserSupportsSpeechRecognition) {
			this.props.recognition.onresult = result => {
				let text = result.results.length
					? result.results[0]["0"].transcript
					: "";
				this.handleTheSpeechInput(text);
			};
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.replyText.url !== undefined) {
			console.log("redirect");
			let generatedId = nextProps.replyText.url
				.split(" ")
				.join("-")
				.toLowerCase();
			this.setState({
				url: generatedId
			});
		}
		if (
			nextProps.replyText.url !== undefined &&
			nextProps.replyText.response === undefined
		) {
			setTimeout(() => {
				this.setState({
					redirect: true
				});
			}, 1000);
		}
		if (nextProps.spawn === false) {
			this.setState({ mounted: false, typedEntry: false, userText: "" });
		}
		if (nextProps.fetchingReply === true) {
			setTimeout(() => {
				this.setState({
					animateLoader: true
				});
			}, 500);
		} else {
			this.setState({ animateLoader: false });
		}

		if (nextProps.fetchedReply === true) {
			setTimeout(() => {
				this.setState({
					animateReply: true
				});
			}, 500);
		} else {
			this.setState({ animateReply: false });
		}
	}

	handleTheSpeechInput(text) {
		this.inputText.value = "";
		console.log("speech:", text);
		this.setState({
			...this.state,
			userText: text,
			typed: "",
			typedEntry: true
		});
		//TODO:  Trigger this after the api call is made
		this.props.dispatch(fetchReply(text));

		//TODO: make the API calls here and update the state
		let area = ReactDOM.findDOMNode(this.refs["text-area"]);
		area.classList.add("text-area-exit");
		setTimeout(() => {
			area.classList.remove("text-area-exit");
			area.classList.add("text-area-add");
		}, 400);
	}

	handleChange(e) {
		console.log(e.target.value);
		this.setState({ typed: e.target.value });
	}

	close() {
		this.props.close();
	}

	recordToggle() {
		if (this.props.listening) this.props.stopListening();
		else this.props.startListening();
	}

	render() {
		if (this.state.redirect) {
			window.location = `https://excelmec.org/${this.state.url}`;
		}

		let className = "container bot-chat-container";

		if (this.props.spawn) className += " spawn";

		let responseAreaText = "";

		if (
			this.props.replyText.url !== undefined &&
			this.props.replyText.response === undefined
		)
			responseAreaText = "Redirecting you in a moment..";
		else responseAreaText = this.props.replyText.response;

		if (
			responseAreaText === undefined ||
			this.props.fetchingReply ||
			this.state.userText === ""
		)
			responseAreaText = "";

		let textDisplayEntry = this.props.spawn ? "animate-init-entry" : "";

		let lookAroundAnim = this.state.animateLoader ? "look-around-anim" : "";
		let replyAnim = this.state.animateReply ? "reply-anim" : "";

		let lookAround =
			this.props.fetchingReply && this.props.spawn ? (
				<div
					className={`look-around ${lookAroundAnim}`}
					style={{
						transition: this.state.animateLoader
							? "transform 0.3s,opacity 0.3s"
							: ""
					}}
				>
					<Dots />
					<h3 className="text-center">Please wait..</h3>
				</div>
			) : this.props.spawn ? (
				<div
					className={`reply ${replyAnim}`}
					style={{
						transition: this.state.animateReply
							? "transform 0.3s,opacity 0.3s"
							: ""
					}}
				>
					<h3>
						{responseAreaText.length > 200 ? (
							`${responseAreaText.substring(0, 200)}...`
						) : (
							responseAreaText
						)}
					</h3>
					{this.props.replyText.url !== undefined &&
					this.props.replyText.response !== undefined ? (
						<a href={`https://excelmec.org/${this.state.url}`}>
							Click here to view more
						</a>
					) : (
						<div />
					)}
					<br />
				</div>
			) : (
				<div />
			);

		let typedEntryAnimate = this.state.typedEntry ? "animate-typed-entry" : "";

		return (
			<div className={`${className} ${typedEntryAnimate}`}>
				<div className="close-button" onClick={this.close}>
					<span>&times;</span>
				</div>
				<div className="bot-chat">
					<h2 className={`text-center title-style ${textDisplayEntry}`}>
						How may I help you?
					</h2>
					<div className="text-area" ref="text-area">
						<h3 className={`text-typed ${typedEntryAnimate}`}>
							{this.state.userText}
						</h3>
						{lookAround}
					</div>
					<div className="text-input">
						<form
							style={{ display: "flex" }}
							onSubmit={e => e.preventDefault()}
						>
							<input
								type="text"
								class="form-control"
								placeholder="Search for..."
								ref={e => (this.inputText = e)}
							/>
							<button
								className="btn btn-default"
								type="submit"
								style={{ marginLeft: "10px" }}
								onClick={() => {
									this.handleTheSpeechInput(this.inputText.value);
								}}
							>
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default BotChat;
