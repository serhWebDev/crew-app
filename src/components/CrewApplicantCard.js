import React, { Component } from 'react';

const textStyle = {
    textTransform: 'capitalize'
};
const arrowStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%'
};
class CrewApplicantCard extends Component {
    render() {
        return (
            <div className="col s12">
                <div className='card-panel grey lighten-5 z-depth-1'>
                    <div className="row valign-wrapper" style={{margin: "0px"}}>
                       {/* <i className="material-icons" style={arrowStyle}>keyboard_arrow_left</i>*/}
                        <div className="col s12 m5">
                            <img src={this.props.picture} alt="asd" className="circle"/>
                        </div>
                        <div className="col s12 m7">
                            <h6 style={textStyle}><b>{this.props.firstname} {this.props.lastname}</b></h6>
                            <p style={textStyle}>{this.props.city}</p>
                        </div>
                        <i className="material-icons" style={arrowStyle}>keyboard_arrow_right</i>
                    </div>
                </div>
            </div>
        );
    }
}
export default CrewApplicantCard;