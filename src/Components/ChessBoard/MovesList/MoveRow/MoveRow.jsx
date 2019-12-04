/**
 * Component MoveRow
 */
import React from 'react';
import './style.css';

/**
 * @function MoveRow
 * A subcomponent to show individual moves
 * @param {*} props - The input props to the component
 */
function MoveRow(props) {
    return (
        <tr>
            <td>
                {props.index}&nbsp; {props.item.split(/[ ]/g)[1]}
            </td>
            <td>{props.item.split(/[ ]/g)[2]}</td>
        </tr>
    );
}

export default MoveRow;
