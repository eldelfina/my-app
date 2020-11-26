import React from 'react';
import s from './Dialogs.module.css';
import dialogsElements from "./DialogsItem/DialogsItem";
import messagesElements from "./Messages/Messages";


const Dialogs = () => {

    return (<div>
            <div className={s.grid}>
                <div className={s.header}>
                    <h2>Dialogs</h2>
                </div>
                <div className={s.row}>
                    <div className={s.item__left}/>
                    <span className={s.item__center}>Brad Pitt</span>
                    <div className={'avatar' + ' ' + s.bigavatar + ' ' + s.item__right}>
                        <img
                            src="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/2:3/w_1428,h_2142,c_limit/BradPitt-GettyImages-1158782727.jpg"
                            alt="mini-avatar"/>
                    </div>
                </div>

                <div className={s.dialogs}>
                    {dialogsElements}
                    {/*
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}
                                imgSrc="https://media.vanityfair.com/photos/5f4d3a7e1e10df7a77868a63/2:3/w_1428,h_2142,c_limit/BradPitt-GettyImages-1158782727.jpg"/>

                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}
                                imgSrc="https://upload.wikimedia.org/wikipedia/commons/9/98/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg"/>

                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}
                                imgSrc="https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_.jpg"/>

                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}
                                imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f2/Keanu_Reeves_2013_%2810615146086%29_%28cropped%29.jpg"/>

                    <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}
                                imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Jennifer_Aniston_as_Rachel_Green.jpg/220px-Jennifer_Aniston_as_Rachel_Green.jpg"/>

                    <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}
                                imgSrc="https://cdn.cliqueinc.com/posts/199172/rachel-green-friends-fashion-199172-1469932324-square.700x0c.jpg"/>

                    <DialogItem name={dialogsData[6].name} id={dialogsData[6].id}
                                imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Courteney_Cox_as_Monica_Geller.jpg/220px-Courteney_Cox_as_Monica_Geller.jpg"/>
*/}

                </div>

                <div className={s.chat}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;