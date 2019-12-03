import React, { Component } from 'react';
import './App.css';

import Container from '../Container/Container';
import Row from '../Row/Row';
import ChessBoard from "../ChessBoard/ChessBoard";

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
