import React, { Fragment } from 'react';

const titleStyle = {
    margin: '0',
    paddingTop: '10px'
};

const Navbar = () => (
    <nav className="nav-extended grey darken-3">
        <div className="nav-wrapper">
            <div className="container">
                <a href="/" className="brand-logo" style={titleStyle}>Crew applications</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://github.com/serhiiVek/">my GitHub</a>
                    </li>
                    <li>
                        <a href="https://github.com/serhiiVek/crew-app">GitHub repository</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;