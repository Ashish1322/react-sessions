import React, { useEffect, useState } from "react";
import { ChatContext } from "../ChatContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { push, ref, onValue, off } from "firebase/database";

export default function ChatProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();

  const login = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        setIsLoggedIn(true);
      })
      .catch((err) => {
        alert("Invalid Creds");
      });
  };

  const register = (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        alert("Account Created");
      })
      .catch((err) => {
        alert("Error while creating account " + err);
      });
  };

  const joinRoom = (roomId) => {
    setRoom(roomId);
  };

  const sendMessage = (message) => {
    const messageRef = ref(db, `chats/${room}`);
    const messageSentToDB = {
      message: message,
      email: auth.currentUser.email,
    };
    push(messageRef, messageSentToDB);
  };

  useEffect(() => {
    if (isLoggedIn == true) {
      navigate("/home");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const messageRef = ref(db, `chats/${room}`);
    onValue(messageRef, (snapshot) => {
      if (snapshot.exists()) {
        let data = snapshot.val();
        let msgs = Object.values(data);
        setMessages(msgs);
      }
    });
    return () => {
      off(messageRef);
    };
  }, [room]);

  return (
    <ChatContext.Provider
      value={{
        login,
        register,
        isLoggedIn,
        joinRoom,
        sendMessage,
        messages,
        room,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
