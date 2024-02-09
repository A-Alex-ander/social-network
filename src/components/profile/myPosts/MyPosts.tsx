import React from 'react';
import s from "./MyPosts.module.css"

import Posts, {PostType} from "./post/Posts";


export type MyPostsType = {
    posts:PostType[]
}

const MyPosts:React.FC<MyPostsType> = ({posts}) => {



    let postsElement = posts.map(el=> <Posts id={el.id} message={el.message} likesCounts={el.likesCounts}/>)
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}

                </div>
            </div>


    );
};

export default MyPosts;