import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Mark",
      image:
        "https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/186561368_2923024637910783_504528976115361762_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1pIbtmuN_cAAX-4SwUe&_nc_ht=scontent.fixr3-1.fna&oh=12e3c143ccfcbb05745505475b713f43&oe=6127E88D",
      message: "whats up ?",
    },
    {
      name: "Mark",
      image:
        "https://scontent.fixr3-1.fna.fbcdn.net/v/t1.6435-9/186561368_2923024637910783_504528976115361762_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=1pIbtmuN_cAAX-4SwUe&_nc_ht=scontent.fixr3-1.fna&oh=12e3c143ccfcbb05745505475b713f43&oe=6127E88D",
      message: "how is it going",
    },
    {
      message: "hloo",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <h2>chat screen</h2>
      <p className="chatScreen__timestamp">you matched with mark 0n 12/12/12</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
