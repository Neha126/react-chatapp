import { useState, useEffect } from "react";
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [msg, setMsg] = useState("");

  const db = getDatabase();
  const chatListRef = ref(db, "chats");

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
  }, []);

  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, { name, message: msg });

    // const c = [...chats];
    // c.push();
    // setChats(c);
    setMsg("");
  };
  return (
    <div className="main">
      {name ? null : (
        <div className="top">
          <input
            type="text"
            placeholder="Enter name to start"
            onBlur={(e) => setName(e.target.value)}
          />
        </div>
      )}
      {name ? (
        <div className="bottom">
          <h3>User:{name}</h3>
          <div className="chat-container">
            {chats.map((c) => (
              <div className={`container ${c.name === name ? "me" : ""}`}>
                <p className="chatbox">
                  <strong>{c.name}:</strong>
                  <span>{c.message}</span>
                </p>
              </div>
            ))}
          </div>
          <div className="msgbox">
            <input
              type="text"
              onInput={(e) => setMsg(e.target.value)}
              value={msg}
              placeholder="enter your msg"
            />
            <button onClick={(e) => sendChat()}>Send</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
