import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./ChatPage.module.css";
import ChatItem from "./ChatItem.jsx";
import ChatSearch from "./ChatSearch.jsx";
import { fetchAllChats } from "./helpers.js";
import { useTranslation } from "react-i18next";

const ChatsPage = () => {
  const { t } = useTranslation();

  const [chats, setChats] = useState([]);
  const token = useSelector((state) => state.authSlice.userData?.token);
  useEffect(() => {
    fetchAllChats(token, setChats);
  }, []);
  return (
    <div className={`pt-5 ${styles.chat_page}`}>
      <div className="container">
        <div className="page-title">
          <div className="h3  mb-4">{t("Your Chats")}</div>
        </div>
        <div className="row">
          <ChatSearch />
          <div className="col-md-9">
            {chats.map((chat) => {
              return <ChatItem key={Math.random()} chat={chat} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsPage;
