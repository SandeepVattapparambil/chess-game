import React, { Component } from 'react';
import './style.css';

import FenBoard from './FenBoard/FenBoard';
import GameStatus from './GameStatus/GameStatus';
import TurnStatus from "./TurnStatus/TurnStatus";

class ChessBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            fen: '',
            pgn: ''
        }
        this.chess = null;
        this.board = null;
        this.boardRoot = 'board';
    }

    /**
     * DOM mounted event
     */
    componentDidMount() {
        this.chess = new window.Chess();
        this.board = new window.Chessboard(this.boardRoot, {
            position: window.ChessUtils.FEN.startId,
            eventHandlers: {
                onPieceSelected: this.pieceSelected,
                onMove: this.pieceMove
            }
        });
        this.resetGame();
    }

    resetGame = () => {
        this.board.setPosition(window.ChessUtils.FEN.startId);
        this.chess.reset();
        this.updateGameInfo('User may start.');
    }

    updateGameInfo = (status) => {
        this.setState({
            status: status,
            fen: this.chess.fen(),
            pgn: this.chess.pgn()
        })
    }

    pieceMove = (move) => {
        let nextPlayer;
        let status;
        let chessMove = this.chess.move({
            from: move.from,
            to: move.to,
            promotion: 'q'
        });

        nextPlayer = 'User';
        if (this.chess.turn() === 'b') {
            nextPlayer = 'Computer';
        }


        if (nextPlayer && nextPlayer === 'Computer') {
            this.updateGameInfo(status = 'Next player is ' + nextPlayer + '.');
            let moves = this.chess.moves();
            let move = moves[Math.floor(Math.random() * moves.length)];
            this.chess.move(move)
            nextPlayer = 'User';
        }


        if (chessMove !== null) {
            if (this.chess.in_checkmate() === true) {
                status = 'CHECKMATE! Player ' + nextPlayer + ' lost.';
            } else if (this.chess.in_draw() === true) {
                status = 'DRAW!';
            } else {
                status = 'Next player is ' + nextPlayer + '.';

                if (this.chess.in_check() === true) {
                    status = 'CHECK! ' + status;
                }
            }
            this.updateGameInfo(status);
        }
        return this.chess.fen();
    }

    pieceSelected = (notationSquare) => {
        let i;
        let movesNotation;
        let movesPosition = [];

        movesNotation = this.chess.moves({ square: notationSquare, verbose: true });
        for (i = 0; i < movesNotation.length; i++) {
            movesPosition.push(window.ChessUtils.convertNotationSquareToIndex(movesNotation[i].to));
        }
        return movesPosition;
    }


    render() {
        return (
            <>
                <div className="col s12 m7" >
                    <div className="card chess-board">
                        <div className="card-content grey-text">
                            <div id="board"></div>
                        </div>
                    </div>
                    <FenBoard fen={this.state.fen} />
                </div>
                <div className="col s12 m5" >
                    <div className="card game-status">
                        <GameStatus />
                    </div>
                    <TurnStatus turn={this.state.status} />
                    <div className="card game-score-board">
                        <div className="card-content grey-text">
                            <span className="card-title">Moves</span>
                            <table className="striped">
                                <thead>
                                    <tr>
                                        <th>Player Computer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.pgn.length > 0 && this.state.pgn.split(/[0-9][.]/).map((item, key) => {
                                        if (item !== '') {
                                            return (
                                                <tr key={key}>
                                                    <td>{key}&nbsp; {item}</td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default ChessBoard;
