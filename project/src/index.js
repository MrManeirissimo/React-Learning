import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// Encapsulation sample
// Creating a 'function component' to wrap a functionality
function Clock(props){
    return (
        <div>
            <h1>What time is it?</h1>
            <h2>It is: {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

// Looping application sample
function tick(){

    // Render step. Direct render-to-component link
    ReactDOM.render(
        <Clock date= {new Date()}/>,
        document.getElementById('root')
    );
} setInterval(tick, 1000);