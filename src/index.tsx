import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostsType} from "./components/profile/myPosts/post/Posts";

export type dialogsType = {
    id: number
    name: string
}

export type messageType = {
    id: number
    message: string
}

let posts: PostsType[] = [
    {id: 1, message: 'Hi how are you', likesCounts: '10'},
    {id: 2, message: 'It`s my first post', likesCounts: '20'},
]


let dialogs: dialogsType[] = [
    {id: 1, name: 'Alexandr'},
    {id: 2, name: 'Vladislav'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Efim'},
    {id: 5, name: 'John'},
]

let message: messageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you ?'},
    {id: 3, message: 'Good'},
    {id: 4, message: 'Great'},
    {id: 5, message: 'Badly'},
]

ReactDOM.render(
    <App dialogs={dialogs} posts={posts} message={message} />,
  document.getElementById('root')
);