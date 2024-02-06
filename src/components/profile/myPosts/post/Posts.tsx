import React from 'react';
import s from "./Posts.module.css"

type PostsType = {
    id:number
    message: string
    likesCounts: string
}
const Posts: React.FC<PostsType> = ({id, message, likesCounts}) => {
    return (
        <div className={s.item}>
            <img src="https://carso.ru/images/honda_1.png"/>
            {message}
            <div>
                <span>{likesCounts}</span>
            </div>
        </div>

    );
};

export default Posts;