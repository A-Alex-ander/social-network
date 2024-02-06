import React from 'react';
import s from "./MyPosts.module.css"
import Posts from "./post/Posts";

type myPostDataType = {
    id:number
    message:string
    likesCounts:string
}
const MyPosts = () => {
    let myPostData:myPostDataType[] = [
        {id:1,message:'Hi how are you', likesCounts:'10'},
        {id:2,message:'It`s my first post', likesCounts:'20'},
    ]
    return (
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                 <Posts id={myPostData[0].id} message={myPostData[0].message} likesCounts={myPostData[0].likesCounts}/>
                 <Posts id={myPostData[0].id} message={myPostData[0].message} likesCounts={myPostData[1].likesCounts}/>

                </div>
            </div>


    );
};

export default MyPosts;