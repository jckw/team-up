import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/NavItem.css'

export class NavItem extends Component {
    render() {
        return (
            <li className="nav-item">
                <a href={this.props.href}>
                    <span
                        className="nav-icon"
                        role="img"
                        aria-label={this.props.icon_label || "icon"}>{this.props.icon}</span>
                    {this.props.title}
                </a>
            </li>
        )
    }
}

NavItem.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    icon_label: PropTypes.string
};
