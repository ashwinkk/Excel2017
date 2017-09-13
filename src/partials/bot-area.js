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
		replyText: store.bot.replyText
	};
})
@SpeechRecognition({
	autoStart: false
})
class BotChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userText: "", useVoiceInput: false, typed: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.handleTheSpeechInput = this.handleTheSpeechInput.bind(this);

		this.props.recognition.onresult = result => {
			let text = result.results.length ? result.results[0]["0"].transcript : "";
			this.handleTheSpeechInput(text);
		};

		this.setState({
			...this.state,
			useVoiceInput: this.props.browserSupportsSpeechRecognition
		});
	}

	handleTheSpeechInput(text) {
		console.log("speech:", text);
		this.setState({
			...this.state,
			userText: text,
			typed: ""
		});
		//TODO:  Trigger this after the api call is made
		setTimeout(this.props.resetTranscript, 2000);

		//TODO: make the API calls here and update the state
		this.props.dispatch(fetchReply(text));
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

	render() {
		let className = "container bot-chat-container";
		if (this.props.spawn) className += " spawn";

		const status = this.props.listening ? (
			<Dots />
		) : (
			<button className="btn btn-default" onClick={this.props.startListening}>
				<FaMicrophone />
			</button>
		);

		// if(this.props.interimTranscript === ""){
		// 	this.props.resetTranscript();
		// }
		let displayQuery = this.state.something;
		return (
			<div className={className}>
				<div className="bot-chat">
					<div className="text-area" ref="text-area">
						<h3 className="text-center">How may I help you?</h3>
						<h3>{this.state.userText}</h3>
						<h3>{this.props.replyText}</h3>
					</div>
					<div className="text-input">
						{this.state.useVoiceInput && (
							<div className="voice-section">{status}</div>
						)}
						<input
							type="text"
							class="form-control"
							placeholder="Search for..."
							value={this.state.typed}
							onChange={this.handleChange}
							ref={e => (this.inputText = e)}
						/>
						<span className="input-group-btn">
							<button
								className="btn btn-default"
								type="button"
								onClick={() => {
									this.handleTheSpeechInput(this.inputText.value);
								}}
							>
								Send
							</button>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default BotChat;
