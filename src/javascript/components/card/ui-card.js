import React, { Fragment } from 'react';
import './ui-card.css';

const textStyle = {
    textTransform: 'capitalize'
};
const arrowStyle = {
    backgroundColor: '#e0e0e0',
    color: '#424242',
    borderRadius: '50%'
};

const UiCard = (props) => (
    <Fragment>
        <div className="col s12">
            <div className='ui-card grey lighten-5 z-depth-1'>
                <div className="row valign-wrapper" style={{margin: "0px"}}>
                    <div className="col s12 m5">
                        <img src={props.picture} alt="userPic" className="circle"/>
                    </div>
                    <div className="col s12 m7">
                        <h6 style={textStyle}><b>{props.firstName} {props.lastName}</b></h6>
                        <p style={{margin:0}}>{props.city}</p>

                        <i className="material-icons left"
                           onClick={() => props.statusChange(props.id, 'dec')}
                           style={arrowStyle}>keyboard_arrow_left</i>

                        <i className="material-icons right"
                           onClick={() => props.statusChange(props.id, 'inc')}
                           style={arrowStyle}>keyboard_arrow_right</i>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default UiCard;