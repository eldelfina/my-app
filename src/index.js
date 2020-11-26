import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {name: 'Brad Pitt', id: '1'},
    {name: 'Margo Robbie', id: '2'},
    {name: 'Johnny Depp', id: '3'},
    {name: 'Keanu Reeves', id: '4'},
    {name: 'Jennifer Aniston', id: '5'},
    {name: 'Rachel Green', id: '6'},
    {name: 'Monica Geller', id: '7'},
]

let messagesData = [
    {sender: 'Brad Pitt', message: 'Hello, how are you?'},
    {sender: 'Kim', message: "I'm fine, thanks! What about you? I hear you’ve been ill."},
    {sender: 'Brad Pitt', message: "Well, I had the flu for a couple of weeks, but I’m fine now."},
    {sender: 'Kim', message: "You’re looking well. By the way, did you hear about Mrs. Jackson?"},
    {sender: 'Brad Pitt', message: 'No, What about her?'},
    {sender: 'Kim', message: 'She had such a bad case of the flu that they had to take her to the hospital.'},
    {sender: 'Brad Pitt', message: 'Oh, I’m sorry to hear that!'},
]


ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

