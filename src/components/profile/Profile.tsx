import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {PostType} from "./myPosts/post/Posts";
import {ProfilePageType} from "../../redux/state/state";


export type ProfileType = {
    profilePage:ProfilePageType
    addPost:()=>void
    updateNewPostText:(newText:string)=>void
}

const Profile:React.FC<ProfileType> = ({profilePage,addPost,updateNewPostText}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} addPost={addPost} newPostText={profilePage.newPostText} updateNewPostText={updateNewPostText}/>
        </div>

    );
};

export default Profile;