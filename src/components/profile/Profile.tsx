import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import state, {addPost, RootStateType} from "../../redux/state/state";
import {PostType} from "./myPosts/post/Posts";



export type ProfileType = {
    posts:PostType[]
    addPost:(postMessage:string)=>void
}

const Profile:React.FC<ProfileType> = ({posts,addPost}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts} addPost={addPost}/>
        </div>

    );
};

export default Profile;