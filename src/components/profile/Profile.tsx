import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import state, {RootStateType} from "../../redux/state/state";
import {PostType} from "./myPosts/post/Posts";



export type ProfileType = {
    posts:PostType[]
}

const Profile:React.FC<ProfileType> = ({posts}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={state.profilePage.posts}/>
        </div>

    );
};

export default Profile;