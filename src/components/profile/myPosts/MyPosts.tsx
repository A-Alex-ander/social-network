import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./post/Posts";

type PostsType = {
    id:number
    message:string
    likesCounts:string
}
const MyPosts = () => {
    let posts:PostsType[] = [
        {id:1,message:'Hi how are you', likesCounts:'10'},
        {id:2,message:'It`s my first post', likesCounts:'20'},
    ]

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