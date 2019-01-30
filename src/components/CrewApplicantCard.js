import React, { Component } from 'react';
import PropTypes from "prop-types";

const textStyle = {
    textTransform: 'capitalize'
};
const arrowStyle = {
    backgroundColor: '#e0e0e0',
    color: '#424242',
    borderRadius: '50%'
};

class CrewApplicantCard extends Component {

    constructor(props) {
        super(props);
        this.state = {status: this.props.status};
    }
    render() {
        return (
            <div className="col s12">
                <div className='card-panel grey lighten-5 z-depth-1'>
                    <div className="row valign-wrapper" style={{margin: "0px"}}>
                        <div className="col s12 m5">
                            <img src={this.props.picture} alt="userPic" className="circle"/>
                        </div>
                        <div className="col s12 m7">
                            <h6 style={textStyle}><b>{this.props.firstName} {this.props.lastName}</b></h6>
                            <p style={textStyle}>{this.props.city}</p>
                            {/*<p>Status: <span>{this.state.status}</span></p>*/}

                                <i className="material-icons left"
                                   onClick={this.props.previousStatus.bind(this, this.props.id)}
                                   style={arrowStyle}>keyboard_arrow_left</i>

                                <i className="material-icons right"
                                   onClick={this.props.nextStatus.bind(this, this.props.id)}
                                   style={arrowStyle}>keyboard_arrow_right</i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CrewApplicantCard.propTypes = {
    previousStatus: PropTypes.func.isRequired,
    nextStatus: PropTypes.func.isRequired,
    picture: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};

export default CrewApplicantCard;