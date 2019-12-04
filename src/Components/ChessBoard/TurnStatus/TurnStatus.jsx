/**
 * Component TurnStatus
 */
import React from 'react';

/**
 * @function TurnStatus
 * A component to show each turn
 * @param {*} props - The input props to the component
 */
function TurnStatus(props) {
    return (
        <div className="card game-score-board">
            <div className="card-content grey-text">
                <span className="card-title">{props.turn}</span>
            </div>
        </div>
    );
}

export default TurnStatus;
