import React from 'react';
import state, {subscribe} from "./redux/state/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, RootStateType, updateNewPostText} from "./redux/state/state";

 let rerenderEntireTree = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
subscribe(rerenderEntireTree)