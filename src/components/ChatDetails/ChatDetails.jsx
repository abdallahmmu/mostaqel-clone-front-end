import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import styles from "./ChatPage.module.css";
import ChatItem from "./ChatItem.jsx";
import ChatInfo from "./ChatInfo.jsx";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
const ChatDetails = () => {
  const { t } = useTranslation();
  const { chatId } = useParams();
  const { role } = useSelector((state) => state.authSlice?.userData);
  const [messageList, setMessageList] = useState([]);
  const message = useRef();
  const chatRef = useRef();

  const socket = useRef(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/chats/${chatId}/messages`)
      .then((res) => res.json())
      .then((data) => {
        setMessageList(data.data);
        const newSocket = io("http://localhost:3300/");
        socket.current = newSocket;

        socket.current.emit("joinRoom", chatId);
        socket.current.emit("markAsRead", chatId, role);
      });
    // Join the chat room

    // Create the WebSocket connection

    return () => {
      if (socket.current) {
        socket.current.emit("markAsRead", chatId, role);
        socket.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (socket.current) {
      // Listen for incoming messages
      socket.current.on("message", (message) => {
        setMessageList([...messageList, message]);
      });
    }
  });
  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
    chatRef.current?.lastChild?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);
  // const connectToRoom = () => {
  //   setLoggedIn(true);
  //
  // };

  const sendMessage = async () => {
    const newMessage = {
      content: message.current.value,
      chatId,
      sender: role,
    };
    socket.current.emit("newMessage", newMessage);
    // setMessageList([...messageList, newMessage]);
    message.current.value = "";
  };
  return (
    <div className={`pt-5 ${styles.chat_page}`}>
      <div className="container">
        <div className="page-title">
          <div className="h3  mb-4">{t("Chat Title")}</div>
        </div>
        <div className="row">
          <ChatInfo />
          <div className="col-md-9 d-flex flex-column">
            <div
              ref={chatRef}
              className="bg-white p-2 mb-2"
              style={{ height: "90vh", overflow: "auto" }}
            >
              {messageList.map((message) => {
                return (
                  <ChatItem
                    key={Math.random() * 1000}
                    isSender={role == message.sender}
                    message={message}
                  />
                );
              })}
            </div>
            <div className="d-flex justify-content-between m-2 ">
              <input
                className="form-control  w-33"
                placeholder="Send Your Message"
                ref={message}
              />
              <button className="mx-2 btn btn-primary" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
