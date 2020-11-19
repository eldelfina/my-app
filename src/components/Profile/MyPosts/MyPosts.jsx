import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <div className={s.myposts}>
                <textarea>Write your new post</textarea>
                <button>Send</button>
            </div>
            <h2 className={s.newposts__h2}>New posts</h2>
            <div className={s.newposts}>
            <Post />
            <Post />
            <Post />
            </div>
        </div>
    )
}

export default MyPosts;