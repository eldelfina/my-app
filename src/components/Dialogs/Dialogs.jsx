import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (<div className={s.dialog}>
        <div className={s.avatar}>
            <img
                src={props.imgSrc}
                alt="mini-avatar"/>
        </div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

const Message = (props) => {
    return (<div>
        <span className={s.sender}>{props.sender}</span>
        <div className="message">{props.message}</div>
    </div>)
}

const Dialogs = () => {
    return (<div>
            <div className={s.grid}>
                <div className={s.header}>
                    <h2>Dialogs</h2>
                </div>
                <div className={s.row}>
                    <div className={s.item__left} />
                    <span className={s.item__center}>Brad Pitt</span>
                    <div className={s.avatar + ' ' + s.bigavatar + ' ' + s.item__right}>
                        <img
                            src="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/2:3/w_1428,h_2142,c_limit/BradPitt-GettyImages-1158782727.jpg"
                            alt="mini-avatar"/>
                    </div>
                </div>

                <div className={s.dialogs}>
                    <DialogItem name='Brad Pitt' id='1'
                                imgSrc="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/2:3/w_1428,h_2142,c_limit/BradPitt-GettyImages-1158782727.jpg"/>

                    <DialogItem name='Margo Robbie' id='2'
                                imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/98/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg"/>

                    <DialogItem name='Johnny Depp' id='3'
                                imgSrc="https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"/>

                    <DialogItem name='Keanu Reeves' id='4'
                                imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg"/>

                    <DialogItem name='Jennifer Aniston' id='5'
                                imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Jennifer_Aniston_as_Rachel_Green.jpg/220px-Jennifer_Aniston_as_Rachel_Green.jpg"/>

                    <DialogItem name='Rachel Green' id='6'
                                imgSrc="https://cdn.cliqueinc.com/posts/199172/rachel-green-friends-fashion-199172-1469932324-square.700x0c.jpg"/>

                    <DialogItem name='Monica Geller' id='7'
                                imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Courteney_Cox_as_Monica_Geller.jpg/220px-Courteney_Cox_as_Monica_Geller.jpg"/>

                </div>

                <div className={s.chat}>
                    <Message sender='Brad Pitt' message='Hello, how are you?' />

                    <Message sender='Kim' message="I'm fine, thanks! What about you? I hear you’ve been ill." />

                    <Message sender='Brad Pitt' message="Well, I had the flu for a couple of weeks, but I’m
                        fine now." />

                    <Message sender='Kim' message="You’re looking well. By the way, did you hear about
                        Mrs. Jackson?" />

                    <Message sender='Brad Pitt' message="No, What about her?" />

                    <Message sender='Kim' message="She had such a bad case of the flu that they had to
                        take her to the hospital." />

                    <Message sender='Brad Pitt' message="Oh, I’m sorry to hear that!" />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;