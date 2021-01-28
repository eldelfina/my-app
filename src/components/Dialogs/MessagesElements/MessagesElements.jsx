import React from 'react';
import Message from './Messages/Messages'; 

let messagesElements = (props) => {
    return props.messagesData.map(m => <Message sender={m.sender} message={m.message}/>);
}

export default MessagesElements;
