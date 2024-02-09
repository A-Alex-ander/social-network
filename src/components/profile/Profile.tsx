import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {PostsType} from "./myPosts/post/Posts";



export type ProfileType = {
    posts:PostsType[]
}

const Profile:React.FC<ProfileType> = ({posts}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>

    );
};

export default Profile;