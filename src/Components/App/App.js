/**
 * Component App
 * This component composes the app from sub components
 */
import React, { Component } from 'react';
import './App.css';

/**
 * Sub components
 */
import Container from '../Container/Container';
import Row from '../Row/Row';
import ChessBoard from '../ChessBoard/ChessBoard';

/**
 * @class App
 */
class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <ChessBoard />
                </Row>
            </Container>
        );
    }
}

export default App;
