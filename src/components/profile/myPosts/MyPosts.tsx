import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./post/Posts";

const MyPosts = () => {
    return (

            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div><button>Add post</button></div>
                </div>
                <div className={s.posts}>
                 <Posts message={"Hi how are you?"} likesCounts={'10'}/>
                 <Posts message={"It's my first post"} likesCounts={'20'}/>

                </div>
            </div>


    );
};

export default MyPosts;