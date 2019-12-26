import React, { Fragment } from 'react';
import './ui-card.css';

const textStyle = {
    textTransform: 'capitalize'
};
const arrowStyle = {
    color: '#424242',
    margin: 0
};

const UiCard = (props) => (
    <Fragment>
        <div className="col s12">
            <div className='ui-card grey lighten-5 z-depth-1'>
                <div className="row valign-wrapper" style={{margin: "0px"}}>
                    <div className="col m5 s5">
                        <img src={props.picture} alt="userPic" className="circle"/>
                    </div>
                    <div className="col m5 s5">
                        <h6 style={textStyle}><b>{props.name}</b></h6>
                        <p style={{margin:0}}>{props.city}</p>
                    </div>
                    <a>
                        <i className="material-icons col m1 s1"
                           onClick={() => props.statusChange(props.id, 'dec')}
                           style={arrowStyle}>keyboard_arrow_left</i>
                    </a>
                    <a>
                        <i className="material-icons col m1 s1"
                           onClick={() => props.statusChange(props.id, 'inc')}
                           style={arrowStyle}>keyboard_arrow_right</i>
                    </a>
                </div>
            </div>
        </div>
    </Fragment>
);

export default UiCard;