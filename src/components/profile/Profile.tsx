import React, {FC} from 'react';

import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPosts from "./myPosts/MyPosts";
import {ProfilePageType} from "../redux/state";

export type ProfileType={
    profilePage:ProfilePageType
    dispatch:(action:any)=>void
}

const Profile:FC<ProfileType> = ({profilePage,dispatch}) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts}
                     newPostText={profilePage.newPostText}
                    dispatch={dispatch}
            />
        </div>

    );
};

export default Profile;