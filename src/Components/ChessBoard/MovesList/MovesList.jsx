/**
 * Component MovesList
 */
import React from 'react';

/**
 * Sub components
 */
import MoveRow from './MoveRow/MoveRow';

/**
 * @function MovesList
 * A component to show various moves made by each player in order
 * @param {*} props - The input props to the component
 */
function MovesList(props) {
    return (
        <div className="card game-score-board">
            <div className="card-content grey-text">
                <span className="card-title">
                    <i className="small material-icons left">directions_walk</i>
                    Moves
                </span>
            </div>
            <div className="card-content table grey-text">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Computer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.pgn.length > 0 &&
                            props.pgn.split(/[0-9][.]/).map((item, key) => {
                                if (item !== '') {
                                    return (
                                        <MoveRow
                                            key={key}
                                            index={key}
                                            item={item}
                                        />
                                    );
                                }
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MovesList;
