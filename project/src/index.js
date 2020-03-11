import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// Encapsulation sample
// Creating a 'function component' to wrap a functionality
function Clock(props){
    return (
        <h2>It is: {props.date.toLocaleTimeString()}.</h2>
    );
}

// Looping application sample
function tick(){

    // Sample of embeding JScode inside HTML/React element
    const sample_element = (
        <div>
            <h1>What time is it?</h1>
            <Clock date={new Date()}/>
        </div>
    );

    // Render step
    ReactDOM.render(
        sample_element,
        document.getElementById('root')
    );
} setInterval(tick, 1000);