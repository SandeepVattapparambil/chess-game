/**
 * React index app to be rendered on to the main html. This is the entry point for the app
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Global styles goes here
 */
import './index.css';

/**
 * The main app component
 */
import App from './Components/App/App';

/**
 * Service worker for optional PWA
 */
import * as serviceWorker from './serviceWorker';

/**
 * Render app on to the main DOM
 */
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
