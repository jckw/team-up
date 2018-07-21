import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Tag} from "./Tag";

export class TagSection extends Component {
    render() {
        const tags = this.props.tags;
        const tagItems = tags.map((tag, index) =>
            <Tag key={index} title={tag}/> // TODO: Change key
        );

        return (
            <div>{tagItems}</div>
        )
    }
}

TagSection.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string)
};
