import React from 'react';
import s from './Dialogs.module.css';
import DialogsElements from "./DialogsItem/DialogsItem";
import messagesElements from "./Messages/Messages";

let dialogsData = [
    {name: 'Brad Pitt', id: '1'},
    {name: 'Margo Robbie', id: '2'},
    {name: 'Johnny Depp', id: '3'},
    {name: 'Keanu Reeves', id: '4'},
    {name: 'Jennifer Aniston', id: '5'},
    {name: 'Rachel Green', id: '6'},
    {name: 'Monica Geller', id: '7'},
]

const Dialogs = (props) => {

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
                    <DialogsElements dialogsData={dialogsData}/>
                </div>

                <div className={s.chat}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;