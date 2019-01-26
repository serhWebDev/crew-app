import React, { Component } from 'react';

import AppliedApplicants from './AppliedApplicants';
import InterviewingApplicants from './InterviewingApplicants';
import HiredApplicants from './HiredApplicants';

class CrewApplicants extends Component {
    render() {
        return (
            <div className="row">
                <AppliedApplicants stateCrewApplicants={this.props.stateCrewApplicants} statefilterData={this.props.statefilterData}/>
                <InterviewingApplicants />
                <HiredApplicants />
            </div>
        );
    }
}
export default CrewApplicants;