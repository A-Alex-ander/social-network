import React from 'react';
import s from "./Profile.module.css"

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
            <div>
                My posts
                <div>
                    New posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>

    );
};

export default Profile;