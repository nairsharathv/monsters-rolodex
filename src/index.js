import React from 'react'; // the core react engine
import ReactDOM from 'react-dom/client'; // react specific to web development
import './index.css'; // style file of index.js
import App from './App'; // the root component of react
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // an html element with id root is used as App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
