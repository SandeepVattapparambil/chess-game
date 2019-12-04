import React from 'react';
import ReactDOM from 'react-dom';
import GameStatus from './GameStatus';
import M from "materialize-css";
window.M = M;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameStatus />, div);
    ReactDOM.unmountComponentAtNode(div);
});
