import React, { Component } from 'react';

import AppliedApplicants from './AppliedApplicants';
import InterviewingApplicants from './InterviewingApplicants';
import HiredApplicants from './HiredApplicants';

class CrewApplicants extends Component {
    render() {
        return (
            <div className="row">
                <AppliedApplicants crewApplicants={this.props.crewApplicants}
                                   stateFilterData={this.props.stateFilterData}
                                   requiredStatus={'Applied'}
                />
                <InterviewingApplicants crewApplicants={this.props.crewApplicants}
                                        stateFilterData={this.props.stateFilterData}
                                        requiredStatus={'Interviewing'}
                />
                <HiredApplicants crewApplicants={this.props.crewApplicants}
                                 stateFilterData={this.props.stateFilterData}
                                 requiredStatus={'Hired'}
                />
            </div>
        );
    }
}
export default CrewApplicants;