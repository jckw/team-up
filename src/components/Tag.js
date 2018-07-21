import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Tag extends Component {
    render() {
        return (
            <span className="chip">{this.props.title}</span>
        )
    }
}

Tag.propTypes = {
    title: PropTypes.string
};
