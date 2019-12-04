import React from 'react';

function TurnStatus(props) {
    return (
        <div className="card game-score-board">
            <div className="card-content grey-text">
                <span className="card-title">{props.turn}</span>
            </div>
        </div>
    )
}

export default TurnStatus;