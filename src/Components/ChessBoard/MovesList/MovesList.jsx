import React from 'react';

function MovesList(props) {
    return (
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
                        {props.pgn.length > 0 &&
                            props.pgn.split(/[0-9][.]/).map((item, key) => {
                                if (item !== '') {
                                    return (
                                        <tr key={key}>
                                            <td>
                                                {key}&nbsp; {item}
                                            </td>
                                        </tr>
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
