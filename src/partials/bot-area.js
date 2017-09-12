import React from "react";
import SpeechRecognition from "react-speech-recognition";
import FaMicrophone from "react-icons/lib/fa";


import "../styles/bot-area.css";



const Dots = () => (
		<div id="wave">
			<span className="dot" />
			<span className="dot" />
			<span className="dot" />
		</div>
);

const ListenButton = (props) => (
	<div className="listen-btn" onClick={props.listenOnClick}>
		<FaMicrophone/>
	</div>
);



@SpeechRecognition({
	autoStart: false
})
class BotChat extends React.Component {

	render() {
		let className = "container bot-chat-container";
		if (this.props.spawn) className += " spawn";

		console.log(this.props.startListening);
		const status = this.props.listening?<Dots/>:<ListenButton listenOnClick={this.props.startListening}/>;

		return (
			<div className={className}>
				<div className="bot-chat">
					<h3 className="text-center">How may I help you?</h3>
					{status}
					<p>{this.props.transcript}</p>
				</div>
			</div>
		);
	}
}

export default BotChat;
