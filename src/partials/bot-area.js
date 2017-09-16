import React from "react";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";
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
		fetchingReply: store.bot.fetchingReply
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
			mounted: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleTheSpeechInput = this.handleTheSpeechInput.bind(this);
		this.recordToggle = this.recordToggle.bind(this);
	}

	componentDidMount() {
		this.handleTheSpeechInput = this.handleTheSpeechInput.bind(this);

		this.setState({
			...this.state,
			useVoiceInput: this.props.browserSupportsSpeechRecognition,
			mounted: true
		});

		if (this.props.browserSupportsSpeechRecognition){
			this.props.recognition.onresult = result => {
				let text = result.results.length ? result.results[0]["0"].transcript : "";
				this.handleTheSpeechInput(text);
			};
		}
		
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.spawn === false) {
			this.setState({ mounted: false, typedEntry: false });
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
		setTimeout(() => {
			this.props.resetTranscript;
			this.props.dispatch(fetchReply(text));
		}, 2000);

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

	recordToggle() {
		if (this.props.listening) this.props.stopListening();
		else this.props.startListening();
	}

	render() {
		let className = "container bot-chat-container";
		if (this.props.spawn) className += " spawn";
		let recordClass = this.props.listening ? "btn-danger" : "";
		const status = (
			<button
				className={`btn btn-default bot-start-rec ${recordClass}`}
				onClick={this.recordToggle}
			>
				<FaMicrophone />
			</button>
		);
		// if (this.props.spawn) return <Redirect to="/competitions" />;
		// if(this.props.interimTranscript === ""){
		// 	this.props.resetTranscript();
		// }
		const responseAreaText = this.props.replyText.response;
		let textDisplayEntry = this.props.spawn ? "animate-init-entry" : "";
		let lookAround =
			this.props.fetchingReply && this.props.spawn ? (
				<div className={`look-around `}>
					<Dots />
					<h3 className="text-center">Looking Around</h3>
				</div>
			) : this.props.spawn ? (
				<div className="reply look-around">
					<h3>{responseAreaText}</h3>
				</div>
			) : (
				<div />
			);
		console.log(this.state.typedEntry);
		let typedEntryAnimate = this.state.typedEntry ? "animate-typed-entry" : "";
		return (
			<div className={`${className} ${typedEntryAnimate}`}>
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
						{this.state.useVoiceInput && (
							<div className="voice-section">{status}</div>
						)}
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
