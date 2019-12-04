/**
 * Component Row
 * A reusable materializecss Row component
 */
import React, { Component } from 'react';

/**
 * @class Row
 */
class Row extends Component {
    render() {
        return <div className="row">{this.props.children}</div>;
    }
}

export default Row;
