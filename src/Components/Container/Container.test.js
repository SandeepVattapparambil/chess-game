import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Container />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing when children are passed', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Container>
            <span>testing children</span>
        </Container>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
