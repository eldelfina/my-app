import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    const path = '/dialogs/' + props.id;

    return (<div className={s.dialog}>
        <div className="avatar">
            <img alt="mini-avatar"/>
        </div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}


let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

export default dialogsElements;