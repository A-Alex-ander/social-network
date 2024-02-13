import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import { RootStateType} from "./redux/state/state";

type AppType= {
    state:RootStateType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}
const App:React.FC<AppType> = ({state,addPost,updateNewPostText})=> {
    return (
        <div>
                <div className="app-wrapper">
                    <Header/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Route path={"/dialogs"} render={()=> <Dialogs dialogs={state.dialogsPage.dialogs} message={state.dialogsPage.messages}/>}/>
                        <Route path={"/profile"} render={()=> <Profile profilePage= {state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                        <Route path={"/news"} component={Profile}/>
                        <Route path={"/music"} component={Profile}/>
                        <Route path={"/settings"} component={Profile}/>
                    </div>
                </div>
        </div>
    );
}


export default App;
