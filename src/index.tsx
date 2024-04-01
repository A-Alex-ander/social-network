import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store, {RootStateType} from "./components/redux/state";

let rerenderEntireTree =(state:RootStateType)=>{
    ReactDOM.render(

        <App state={store._state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree(store.getState()));

