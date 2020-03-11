import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// Looping application sample
function tick(){
    
    // Sample of embeding JScode inside HTML/React element
    const sample_element = (
        <div>
            <h1>Hello world!</h1>
            <h2>It is: {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    // Render step
    ReactDOM.render(
        sample_element,
        document.getElementById('root')
    );
} setInterval(tick, 1000);