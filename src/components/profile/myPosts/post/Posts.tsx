import React from 'react';
import s from "./Posts.module.css"

type PostsType = {
    message: string
    likeCounts: string
}
const Posts: React.FC<PostsType> = ({message,likeCounts}) => {
    return (
        <div className={s.item}>
            <img src="https://carso.ru/images/honda_1.png"/>
            {message}
            <div>
                <span>{likeCounts}</span>
            </div>
        </div>

    );
};

export default Posts;