import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {dialogsType, messageType} from "./index";
import {PostsType} from "./components/profile/myPosts/post/Posts";
import Profile from "./components/profile/Profile";

type AppType= {
    dialogs:dialogsType[]
    posts: PostsType[]
    message: messageType[]
}
const App:React.FC<AppType> = ({dialogs,posts,message})=> {
    return (
        <div>
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Route path={"/dialogs"} render={()=> <Dialogs dialogs={dialogs} message={message}/>}/>
                        <Route path={"/profile"} render={()=> <Profile posts={posts}/>}/>
                        <Route path={"/news"} component={Profile}/>
                        <Route path={"/music"} component={Profile}/>
                        <Route path={"/settings"} component={Profile}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>



    );
}


export default App;
