import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBg2bl06Lk7nnhHpG4Oz8HOyJBxjIWsGsY",
  authDomain: "react-chat-app-75abd.firebaseapp.com",
  databaseURL: "https://react-chat-app-75abd-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-75abd",
  storageBucket: "react-chat-app-75abd.appspot.com",
  messagingSenderId: "1038641374819",
  appId: "1:1038641374819:web:9ba09ecb4ac1167f367a56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// root.render(

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
