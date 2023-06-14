import React from "react";
import styles from "./ChatPage.module.css";
import ChatItem from "./ChatItem.jsx";
import ChatSearch from "./ChatSearch.jsx";

const ChatsPage = () => {
  return (
    <div className={`pt-5 ${styles.chat_page}`}>
      <div className="container">
        <div className="page-title">
          <div className="h3  mb-4">Your Chats</div>
        </div>
        <div className="row">
          <ChatSearch />
          <div className="col-md-9">
            <ChatItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
