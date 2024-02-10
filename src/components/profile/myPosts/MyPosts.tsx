import React, {useRef} from 'react';
import s from "./MyPosts.module.css"

import Posts, {PostType} from "./post/Posts";


export type MyPostsType = {
    posts:PostType[]
    addPost:(postMessage:string)=>void
}

const MyPosts:React.FC<MyPostsType> = ({posts,addPost}) => {
    let postsElement = posts.map(el=> <Posts id={el.id} message={el.message} likesCounts={el.likesCounts} addPost={el.addPost}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPostHandler = () => {
        debugger
        if(newPostElement.current) {
            addPost(newPostElement.current.value)

        }
    }
    return (
            <div>
                My posts
                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}

                </div>
            </div>


    );
};

export default MyPosts;