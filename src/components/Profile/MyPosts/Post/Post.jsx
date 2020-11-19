import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.row}>
            <div className={s.avatar}>
                <img
                    src="https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="mini-avatar"/>
            </div>
            <div className={s.post}>
                post 1
            </div>
        </div>
)
}

export default Post