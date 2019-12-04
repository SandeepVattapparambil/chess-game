/**
 * Component FenBoard
 */
import React from 'react';

/**
 * @function FenBoard
 * A reusable component for showing the chess FEN String
 * @param {*} props - The input props to the component
 */
function FenBoard(props) {
    return (
        <div className="card game-score-board">
            <div className="card-content grey-text">
                <p>Fen: {props.fen}</p>
            </div>
        </div>
    );
}

export default FenBoard;
