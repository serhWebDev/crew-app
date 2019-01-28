import React, { Component } from 'react';

import ApplicantsList from "./ApplicantsList";

class HiredApplicants extends Component {
    render() {
        return (
            <div className="col s12 m4 l4">
                <h6 className="center-align"><b>{this.props.requiredStatus}</b></h6>
                <ApplicantsList crewApplicants={this.props.crewApplicants}
                                stateFilterData={this.props.stateFilterData}
                                requiredStatus={this.props.requiredStatus}
                />
            </div>
        );
    }
}
export default HiredApplicants;