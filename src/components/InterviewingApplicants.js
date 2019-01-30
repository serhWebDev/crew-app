import React, { Component } from 'react';

import ApplicantsList from "./ApplicantsList";

class InterviewingApplicants extends Component {
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
                />
            </div>
        );
    }
}

export default InterviewingApplicants;