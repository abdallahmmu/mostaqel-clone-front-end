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
  const fileUpload = useRef();

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
    const formData = new FormData();
    formData.append("sender", role);
    formData.append("content", message.current.value);
    formData.append("chatId", chatId);
    if (fileUpload.current.files.length) {
      const fileList = fileUpload.current.files;
      for (let i = 0; i < fileList.length; i++) {
        formData.append("attachments", fileList[i]);
      }
    }

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/chats/${chatId}/messages`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // const newMessage = {
    //   content: ,
    //   chatId,
    //   : role,
    // };
    // socket.current.emit("newMessage", newMessage);

    // setMessageList([...messageList, newMessage]);
    message.current.value = "";
    fileUpload.current.value = "";
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

            <div className="row">
              <div className="form-group mb-3 col-6">
                <input
                  className="form-control  col-6 mb-2"
                  placeholder="Send Your Message"
                  ref={message}
                  type="text"
                />
              </div>
              <div className="form-group mb-3 col-4">
                <input
                  className="form-control  col-6 mb-2"
                  ref={fileUpload}
                  type="file"
                  multiple
                />
              </div>

              <div className="form-group mb-3 text-center col-2">
                <button
                  type="submit"
                  className="btn btn-primary me-5"
                  onClick={sendMessage}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
