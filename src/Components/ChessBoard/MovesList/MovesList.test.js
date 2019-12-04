import React from 'react';
import ReactDOM from 'react-dom';
import MovesList from './MovesList';
import M from 'materialize-css';
window.M = M;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovesList pgn={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
