import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ApplicantsList from "./ApplicantsList";

class HiredApplicants extends Component {
    render() {
        return (
            <div className="col s12 m4 l4">
                <h6 className="center-align"><b>{this.props.requiredStatus}</b></h6>
                <ApplicantsList crewApplicants={this.props.crewApplicants}
                                filterCity={this.props.filterCity}
                                filterName={this.props.filterName}
                                requiredStatus={this.props.requiredStatus}
                                nextStatus={this.props.nextStatus}
                                previousStatus={this.props.previousStatus}
                                idLeftRight={this.props.idLeftRight}
                />
            </div>
        );
    }
}

HiredApplicants.propTypes = {
    crewApplicants: PropTypes.array.isRequired,
    filterCity: PropTypes.string.isRequired,
    filterName: PropTypes.string.isRequired,
    requiredStatus: PropTypes.string.isRequired,
    nextStatus: PropTypes.func.isRequired,
    previousStatus: PropTypes.func.isRequired,
};

export default HiredApplicants;