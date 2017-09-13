import React from "react";
import SpeechRecognition from "react-speech-recognition";
import {FaMicrophone} from "react-icons/lib/fa";


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

	constructor(props){
		super(props);
		this.state = { userText: "", useVoiceInput: false };
	}

	componentDidMount(){
		this.handleTheSpeechInput = this.handleTheSpeechInput.bind(this);

		this.props.recognition.onresult = result => {
			let text = result.results.length?result.results[0]["0"].transcript:"";
			this.handleTheSpeechInput(text);
		};

		this.setState({
			...this.state,
			useVoiceInput: this.props.browserSupportsSpeechRecognition
		});
	}

	handleTheSpeechInput(text){
		console.log("speech:",text);
		this.setState({
			...this.state,
			userText: text
		});
		//TODO:  Trigger this after the api call is made
		setTimeout(this.props.resetTranscript,2000);

		//TODO: make the API calls here and update the state
	}

	render() {
		let className = "container bot-chat-container";
		if (this.props.spawn) className += " spawn";

		const status = this.props.listening?<Dots/>:<button onClick={this.props.startListening}><FaMicrophone/></button>;


		// if(this.props.interimTranscript === ""){
		// 	this.props.resetTranscript();
		// }

		return (
			<div className={className}>
				<div className="bot-chat">
					<h3 className="text-center">How may I help you?</h3>
					{this.state.useVoiceInput && <div className="voice-section">{status}</div>}
					<p>{this.state.userText}</p>
					<input type="text" ref={ e => this.inputText = e}/>
					<button onClick={() => {this.handleTheSpeechInput(this.inputText.value)}}>send</button>
				</div>
			</div>
		);
	}
}

export default BotChat;
