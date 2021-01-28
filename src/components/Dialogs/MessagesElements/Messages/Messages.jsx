import React from 'react';
import s from './Messages.module.css';



const Message = (props) => {
    return (<div>
        <span className={s.sender}>{props.sender}</span>
        <div className="message">{props.message}</div>
    </div>)
}

export default Message;
