import React from "react";

import "../styles/bot-area.scss";

class BotChat extends React.Component {
	render() {
		let className = "container bot-chat-container";
		if (this.props.spawn) className += " spawn";
		return (
			<div className={className}>
				<div className="bot-chat">
					<h3 className="text-center">How may I help you?</h3>
					<div id="wave">
						<span className="dot" />
						<span className="dot" />
						<span className="dot" />
					</div>
					<h3 className="text-center">COMING SOON</h3>
				</div>
			</div>
		);
	}
}

export default BotChat;
