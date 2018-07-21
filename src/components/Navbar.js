import React, {Component} from 'react';
import '../styles/Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <header className="navbar">
                <section className="navbar-section">
                    <a href="/" className="navbar-brand mr-2">
                        <span role="img" aria-label="handshake">🤝</span> Team Up
                    </a>
                    <a href="/" className="btn btn-link">What?</a>
                    <a href="/" className="btn btn-link">How?</a>
                </section>
                <section className="navbar-section">
                    <a href="/" className="btn btn-link">GitHub</a>
                </section>
            </header>
        )
    }
}
