/**
 * Component Container
 * A reusable materializecss container component
 */
import React, { Component } from 'react';
import './style.css';

/**
 * @class Container
 */
class Container extends Component {
    render() {
        return <div className="container">{this.props.children}</div>;
    }
}

export default Container;
