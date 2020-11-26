import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {

    let messagesData = [
        {message: "Hello, I'm fine. Happy to be here", count: 15},
        {message: "WOW I've just bought beautiful seeds for my garden! Fantastic!", count: 5},
        {
            message: "My favourite flower is peony. They are soooo neat, soft and gentle. And what about you? Which flower is your favourite?",
            count: 9
        },
    ]

    let messagesElements = messagesData.map(m => <Post message={m.message} count={m.count}/>)

    return (
        <div className={s.posts}>
            <h2 className={s.myposts__h2}>My posts</h2>
            <div className={s.myposts}>
                <textarea defaultValue="What's new?"/>
                <button>Send</button>
            </div>
            <h2 className={s.myposts__h2}>New posts</h2>
            <div className={s.newposts}>
                {messagesElements}
            </div>
        </div>
    )
}

export default MyPosts;