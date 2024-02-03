import React from 'react';
import s from "./Posts.module.css"

const Posts = () => {
    return (
        <div className={s.item}>
            <img src="https://carso.ru/images/honda_1.png" />
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>

    );
};

export default Posts;