import React from 'react';
import ReactDOM from 'react-dom';
import FenBoard from './FenBoard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FenBoard />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when FEN string is passed as props', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FenBoard fen={'werwe'}></FenBoard>, div);
    ReactDOM.unmountComponentAtNode(div);
});
