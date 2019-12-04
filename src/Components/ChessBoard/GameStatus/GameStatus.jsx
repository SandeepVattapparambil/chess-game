/**
 * Component GameStatus
 */
import React, { useEffect } from 'react';

/**
 * @function GameStatus
 * A component for showing the game status information
 * @param {*} props - The input props to the component
 */
function GameStatus(props) {
    //Get reference to the reset button
    let resetGameButton = React.createRef();
    //materialize tooltip options object
    let tooltipOptions = {};

    /**
     * useEffect lifecycle hook
     * get the tooltip element and then initialize tooltip on it using materialize Tooltip.init() method
     */
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
                        onClick={e => props.reset('newGame')}
                        ref={resetGameButton}
                    >
                        <i className="small material-icons left">refresh</i>
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
