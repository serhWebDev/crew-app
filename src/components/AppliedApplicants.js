import React, { Component } from 'react';

import ApplicantsList from "./ApplicantsList";

class AppliedApplicants extends Component {
    render() {
        return (
            <div className="col s12 m4 l4">
                <h6 className="center-align"><b>Applied</b></h6>
                <ApplicantsList stateCrewApplicants={this.props.stateCrewApplicants} statefilterData={this.props.statefilterData}/>
            </div>
        );
    }
}
export default AppliedApplicants;

