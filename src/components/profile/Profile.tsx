import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt=""/>
            </div>
            <div>
                ava + descriptions
            </div>
        <MyPosts/>
        </div>

    );
};

export default Profile;