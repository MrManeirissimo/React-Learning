import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// Sample function with one parameter
function formatUsername(user){
    return user.first + ' ' + user.last;
}

// User defined variable
const sample_user = {
    first: 'Sarah',
    last: 'Connor'
}

// Sample of embeding JScode inside HTML/React element
const sample_element = <h2>Hello, {formatUsername(sample_user)}</h2>

// Render step
ReactDOM.render(
    sample_element,
     document.getElementById('root')
);