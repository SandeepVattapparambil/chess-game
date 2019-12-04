import React, { useEffect } from 'react';

function GameStatus(props) {
    let resetGameButton = React.createRef();
    let tooltipOptions = {};

    useEffect(() => {
        let element = resetGameButton.current;
        window.M.Tooltip.init(element, tooltipOptions);
    });

    return (
        <>
            <div className="card-content header grey-text">
                <span className="card-title">
                    <i className="small material-icons left">videogame_asset</i>
                    Game Status
                    <a
                        className="grey lighten-2 waves-effect btn-flat right tooltipped"
                        data-position="bottom"
                        data-tooltip="Reset or start a new game"
                        onClick={props.reset}
                        ref={resetGameButton}
                    >
                        <i className="small material-icons left">
                        refresh
                        </i>
                        Reset Game
                    </a>
                </span>
            </div>
            <div className="card-content grey-text">
                <div className="chip blue lighten-2">
                    Player
                    <img src="img/user.png" alt="player" />
                </div>
                &nbsp; X &nbsp;
                <div className="chip red lighten-3">
                    Computer
                    <img src="img/pc.png" alt="player" />
                </div>
            </div>
        </>
    );
}

export default GameStatus;
