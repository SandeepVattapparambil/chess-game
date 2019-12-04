import React from 'react';
import ReactDOM from 'react-dom';
import TurnStatus from './TurnStatus';
import M from 'materialize-css';
window.M = M;

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TurnStatus turn={'test string'} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
