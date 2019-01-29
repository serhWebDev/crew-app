import React, { Component } from 'react';

const titleStyle = {
    margin: '0',
    paddingTop: '10px'
};

class Title extends Component {
    render() {
        return (
            <div>
                <nav className="nav-extended grey darken-3">
                    <div className="nav-wrapper">
                        <a href="/"><h3 className="center-align" style={titleStyle}>Crew Applicants</h3></a>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Title;