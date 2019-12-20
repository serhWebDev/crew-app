import React, { Component } from 'react';
import ApplicantsList from "./ApplicantsList";

class ApplicantsListContainer extends Component {
    render() {
        return (
            <div className="col s12 m4 l4">
                <h6 className="center-align">
                    <b>{this.props.requiredStatus.title}</b>
                </h6>
                <ApplicantsList
                    crewApplicants={this.props.crewApplicants}
                    requiredStatus={this.props.requiredStatus.id}
                    statusChange={(id, action) => this.props.statusChange(id, action)}
                />
            </div>
        );
    }
}

export default ApplicantsListContainer;