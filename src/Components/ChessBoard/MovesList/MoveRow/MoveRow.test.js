import React from 'react';
import ReactDOM from 'react-dom';
import MoveRow from './MoveRow';
import M from 'materialize-css';
window.M = M;

const spy = jest.spyOn(console, 'error').mockImplementation();
it('renders without crashing and throws a warning because this component contains <tr> , which will be rendered inside jest DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoveRow item={'we wer'} />, div);
    expect(spy).toHaveBeenCalledTimes(1); 
    ReactDOM.unmountComponentAtNode(div);
});
