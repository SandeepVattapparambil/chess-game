/**
 * Component ChessBoard
 */
import React, { Component } from 'react';
import './style.css';

/**
 * Subcomponents
 */
import FenBoard from './FenBoard/FenBoard';
import GameStatus from './GameStatus/GameStatus';
import TurnStatus from './TurnStatus/TurnStatus';
import MovesList from './MovesList/MovesList';

/**
 * @class ChessBoard
 * The main chessboard app which includes the chess and Chessboard library integrations
 */
class ChessBoard extends Component {
    /**
     * Initialize the ChessBoard module.
     * State holds status, Forsyth-Edwards Notation (FEN) string, and the Portable Game Notation (PGN string).
     * Also chess instance, chessboard instance and board identifier are set as the properties of the class
     * @param {*} props - The input props to the component
     */
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            fen: '',
            pgn: '',
        };
        this.chess = null;
        this.board = null;
        this.boardRoot = 'board';
    }

    /**
     * DOM mounted event
     * Initialize Chess(), Chessboard() objects once they are available from the global window object.
     * And then reset the board for sanity.
     */
    componentDidMount() {
        this.chess = new window.Chess();
        this.board = new window.Chessboard(this.boardRoot, {
            position: window.ChessUtils.FEN.startId,
            eventHandlers: {
                onPieceSelected: this.pieceSelected,
                onMove: this.pieceMove,
            },
        });
        this.resetGame();
    }

    /**
     * @function resetGame
     * A helper function to reset the chess game and board
     * @param {String} origin - The origin of reset event
     */
    resetGame = origin => {
        this.board.setPosition(window.ChessUtils.FEN.startId);
        this.chess.reset();
        this.updateGameInfo('User may start.');
        origin && origin !== undefined
            ? window.M.toast({ html: 'Starting new game!' })
            : window.M.toast({ html: 'Welcome!' });
    };

    /**
     * @function updateGameInfo
     * A helper function to update game information so as to show to the player.
     * @param {String} status - Current status of the game in string format
     */
    updateGameInfo = status => {
        this.setState({
            status: status,
            fen: this.chess.fen(),
            pgn: this.chess.pgn(),
        });
    };

    /**
     * @function pieceMove
     * A helper function to set and make moves on the chessboard and to validate it.
     * @param {Object} move - The chess move object
     */
    pieceMove = move => {
        let nextPlayer;
        let status;
        let chessMove = this.chess.move({
            from: move.from,
            to: move.to,
            promotion: 'q',
        });

        nextPlayer = 'User';
        if (this.chess.turn() === 'b') {
            nextPlayer = 'Computer';
        }

        if (nextPlayer && nextPlayer === 'Computer') {
            this.updateGameInfo(
                (status = 'Next player is ' + nextPlayer + '.')
            );
            let moves = this.chess.moves();
            let move = moves[Math.floor(Math.random() * moves.length)];
            this.chess.move(move);
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
    };

    /**
     * @function pieceSelected
     * A helper function to set the moves based on the FEN notation string
     * @param {String} notationSquare - The FEN notation string for a move
     */
    pieceSelected = notationSquare => {
        let i;
        let movesNotation;
        let movesPosition = [];

        movesNotation = this.chess.moves({
            square: notationSquare,
            verbose: true,
        });
        for (i = 0; i < movesNotation.length; i++) {
            movesPosition.push(
                window.ChessUtils.convertNotationSquareToIndex(
                    movesNotation[i].to
                )
            );
        }
        return movesPosition;
    };

    render() {
        return (
            <>
                <div className="col s12 m7">
                    <div className="card chess-board">
                        <div className="card-content grey-text">
                            <div id="board"></div>
                        </div>
                    </div>
                    <FenBoard fen={this.state.fen} />
                </div>
                <div className="col s12 m5">
                    <div className="card game-status">
                        <GameStatus reset={this.resetGame} />
                    </div>
                    <TurnStatus turn={this.state.status} />
                    <MovesList pgn={this.state.pgn} />
                </div>
            </>
        );
    }
}

export default ChessBoard;
