import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { post: "Hello, I'm fine. Happy to be here", count: 15 },
  {
    post: "WOW I've just bought beautiful seeds for my garden! Fantastic!",
    count: 5,
  },
  {
    post:
      "My favourite flower is peony. They are soooo neat, soft and gentle. And what about you? Which flower is your favourite?",
    count: 9,
  },
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

