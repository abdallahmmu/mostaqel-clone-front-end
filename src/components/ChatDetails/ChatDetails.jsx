import React from "react";
import styles from "./ChatPage.module.css";
import ChatItem from "./ChatItem.jsx";
import ChatInfo from "./ChatInfo.jsx";

const ChatDetails = () => {
  return (
    <div className={`pt-5 ${styles.chat_page}`}>
      <div className="container">
        <div className="page-title">
          <div className="h3  mb-4">Chat Title</div>
        </div>
        <div className="row">
          <div className="col-md-9 d-flex justify-content flex-column">
            <ChatItem />
            <input
              className="form-control p-2 m-5 ml-0 w-50"
              placeholder="Send Your Message"
            />
          </div>
          <ChatInfo />
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
