import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';


export default let DialogsElements = (props) => {
    return props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id}/>);
}