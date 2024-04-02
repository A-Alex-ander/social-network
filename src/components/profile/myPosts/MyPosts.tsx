import React, {FC, useRef} from 'react';
import s from "./MyPosts.module.css"
import Posts, {PostType} from "./post/Posts";
import {ActionType, addPostAC, onPostChangeAC} from "../../redux/state";

type MyPostType = {
    posts: PostType[]
    newPostText: string
    dispatch:(action:ActionType)=>void
}



const MyPosts: FC<MyPostType> = ({posts,  newPostText, dispatch}) => {


    const postsElements = posts.map(el => {
        return (
            <Posts id={el.id} message={el.message} likesCounts={el.likesCounts}/>
        )
    })

    // let newPostElement = React.createRef();
    // дальше при добавлении в addPostHandler и попытки прочитать value, ошибка, поэтому делаем по другому
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPostHandler = () => {
            dispatch(addPostAC())

        // alert(newPostElement.current?.value) другой вариант записи
    }

    const onPostChange = () => {
        if (newPostElement.current !== null) {
            // let action:ActionType = {type:'UPDATE-NEW-POST-TEXT',newText:newPostElement.current.value}
           let action = onPostChangeAC(newPostElement.current.value)
            dispatch(action)
        }
    }
    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={newPostText}/></div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>


    );
};

export default MyPosts;