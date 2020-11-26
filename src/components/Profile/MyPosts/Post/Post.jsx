import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
        <div className={s.row}>
            <div className={'avatar' + ' ' + s.bigavatar}>
                <img
                    src="https://images.pexels.com/photos/1580270/pexels-photo-1580270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="mini-avatar"/>
            </div>
            <div className='message'>
                <span>{props.message}</span>
                <hr/>
                <div className={s.row}>
                <img className={s.icon}
                     src="https://firebasestorage.googleapis.com/v0/b/project-23ac0.appspot.com/o/finger.png?alt=media&token=e63f8a5d-fc95-4056-8440-85a4fd728027"
                     alt="icon" />
                    <div className={s.count}><span>{props.count}</span></div>
                </div>
            </div>
        </div>
        </div>
)
}

export default Post