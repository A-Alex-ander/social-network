import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {ActionType, RootStateType, StoreType} from "./components/redux/state";


export type AppType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
    store:StoreType
}

function App({state, dispatch,store}: AppType): JSX.Element {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path={"/dialogs"} render={() => <Dialogs store={store}/>}/>
                    <Route path={"/profile"} render={() => <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                    <Route path={"/news"} render={() => <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                    <Route path={"/music"} render={() => <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                    <Route path={"/settings"} render={() => <Profile profilePage={state.profilePage} dispatch={dispatch}/>}/>
                </div>
            </div>
        </BrowserRouter>


    );
}


export default App;
