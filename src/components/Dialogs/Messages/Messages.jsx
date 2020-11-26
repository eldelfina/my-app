import React from 'react';
import s from './Messages.module.css';
import data from "../../../index";


const Message = (props) => {
    return (<div>
        <span className={s.sender}>{props.sender}</span>
        <div className="message">{props.message}</div>
    </div>)
}

let messagesElements = messagesData.map(m => <Message sender={m.sender} message={m.message}/>);


export default messagesElements;
