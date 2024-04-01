import React from 'react';
import s from "./Posts.module.css"
export type PostType = {
    id:number
    message:string
    likesCounts:number
}
const Posts: React.FC<PostType> = ({id,message, likesCounts}) => {
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