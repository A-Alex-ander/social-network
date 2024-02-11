import React, {useRef} from 'react';
import s from "./MyPosts.module.css"

import Posts, {PostType} from "./post/Posts";


export type MyPostsType = {
    posts:PostType[]
    addPost:()=>void
    newPostText: string
    updateNewPostText:(newText:string)=>void
}

const MyPosts:React.FC<MyPostsType> = ({posts,addPost,newPostText,updateNewPostText}) => {
    let postsElement = posts.map(el=> <Posts id={el.id} message={el.message} likesCounts={el.likesCounts} addPost={el.addPost}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPostHandler = () => {
            addPost()
        }


    let onPostChange = ()=> {
        let text = newPostElement.current?.value
        if(text) {
            updateNewPostText(text)
        }
    }
    return (
            <div>
                My posts
                <div>
                    <textarea onChange={onPostChange}  ref={newPostElement} value={newPostText}/>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}

                </div>
            </div>


    );
};

export default MyPosts;