import React from 'react';

function GameStatus(props) {
    return (
        <div className="card-content grey-text">
            <span className="card-title">Game Status</span>
            <div className="chip blue lighten-2"> Player
        <img src="img/user.png" alt="player" />
            </div>
            &nbsp; X &nbsp;
        <div className="chip red lighten-3"> Computer
        <img src="img/pc.png" alt="player" />
            </div>
        </div>
    )
};

export default GameStatus;