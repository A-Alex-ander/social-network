import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import dialogs from "./components/dialogs/Dialogs";
import posts from "./components/profile/myPosts/post/Posts";
import message from "./components/dialogs/message/Message";
import state from "./redux/state/state";


ReactDOM.render(
    <App state={state} />,
  document.getElementById('root')
);