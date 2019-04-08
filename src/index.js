import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

const App = () => {
    return (
        <div className='app'>
        <img alt='header' src='/dist/images/header.jpg' className='app-header' />
            <p>Here, We are Blackpink</p>
            <p>- Jennie</p>
        </div>
    );
};

console.log('process.env.VERSION', process.env.VERSION);
console.log('process.env.PLATFORM', process.env.PLATFORM);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);

ReactDOM.render(<App />, document.getElementById('app'));