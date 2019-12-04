import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Row />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when children are passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Row>
            <span>testing children</span>
        </Row>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
