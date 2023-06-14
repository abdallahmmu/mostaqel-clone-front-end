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
          <div className="col-md-9 ltr">
            <ChatItem />
          </div>
          <ChatInfo />
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
