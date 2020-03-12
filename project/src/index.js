import React from 'react';
import ReactDOM from 'react-dom';

import Clock from '../src/components/clock/Clock'

// Render step. Direct render-to-component link
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);