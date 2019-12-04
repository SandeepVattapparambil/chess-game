import React from 'react';

function FenBoard(props) {
    return (
        <div className="card game-score-board">
            <div className="card-content grey-text">
                <p>Fen: {props.fen}</p>
            </div>
        </div>
    )
};

export default FenBoard;