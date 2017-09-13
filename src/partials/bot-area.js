import React from "react";
import SpeechRecognition from "react-speech-recognition";
import { FaMicrophone } from "react-icons/lib/fa";

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

@SpeechRecognition({
	autoStart: false
})
class BotChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = { userText: "", useVoiceInput: false };
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
			userText: text
		});
		//TODO:  Trigger this after the api call is made
		setTimeout(this.props.resetTranscript, 2000);

		//TODO: make the API calls here and update the state
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
					<div className="text-area">
						<h3 className="text-center">How may I help you?</h3>
						<h3>{this.state.userText}</h3>
						<h3>{this.props.reply}</h3>
					</div>
					<div className="text-input">
						{this.state.useVoiceInput && (
							<div className="voice-section">{status}</div>
						)}
						<input
							type="text"
							class="form-control"
							placeholder="Search for..."
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
