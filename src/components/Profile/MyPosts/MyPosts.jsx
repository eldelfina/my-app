import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h2 className={s.myposts__h2}>My posts</h2>
            <div className={s.myposts}>
                <textarea defaultValue="What's new?" />
                <button>Send</button>
            </div>
            <h2 className={s.myposts__h2}>New posts</h2>
            <div className={s.newposts}>
            <Post message="Hello, I'm fine. Happy to be here" count='15'/>
            <Post message="WOW I've just bought beautiful seeds for my garden! Fantastic!" count='5'/>
            <Post message="My favourite flower is peony. They are soooo neat, soft and gentle. And what about you? Which flower is your favourite?" count='9'/>
            </div>
        </div>
    )
}

export default MyPosts;