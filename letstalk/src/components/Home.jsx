import React from "react";
import { useState } from "react";
import useChat from "../context/hooks/useChat";

export default function Home() {
  const { joinRoom, sendMessage, messages, room: joinedRoom } = useChat();
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");

  console.log(message, "messages");
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {/* Left Sidebar */}
        <div
          className="col-md-4 col-lg-3 border-end"
          style={{ minHeight: "80vh" }}
        >
          <h4 className="mb-4">Rooms</h4>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              joinRoom(room);
              setRoom("");
            }}
          >
            <div className="mb-2">
              <input
                onChange={(e) => setRoom(e.currentTarget.value)}
                type="text"
                className="form-control"
                placeholder="Enter Room ID"
                required
                value={room}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Join Room
            </button>
          </form>

          <h4 className="mb-4">Joined Room : {joinedRoom} </h4>
        </div>

        {/* Right Chat Window */}
        <div className="col-md-8 col-lg-9">
          <h4 className="mb-3">Chat Room</h4>

          <div
            className="border rounded p-3 mb-3"
            style={{
              height: "60vh",
              overflowY: "scroll",
              background: "#f8f9fa",
            }}
          >
            {/* Example chat messages */}
            {messages.map((item, index) => (
              <div key={index} className="mb-2">
                <span>{item?.email}</span> <br />
                {item.message}
              </div>
            ))}

            {/* Chat messages will appear here */}
          </div>

          <form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(message);
              setMessage("");
            }}
          >
            <input
              onChange={(e) => setMessage(e.currentTarget.value)}
              value={message}
              type="text"
              className="form-control me-2"
              placeholder="Type your message..."
              required
            />
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
