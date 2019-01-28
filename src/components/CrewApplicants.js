import React, { Component } from 'react';

import AppliedApplicants from './AppliedApplicants';
import InterviewingApplicants from './InterviewingApplicants';
import HiredApplicants from './HiredApplicants';

class CrewApplicants extends Component {

    render() {
        return (
            <div className="row">
                <AppliedApplicants crewApplicants={this.props.crewApplicants}
                                   filterCity={this.props.filterCity}
                                   filterName={this.props.filterName}
                                   requiredStatus={'Applied'}
                />
                <InterviewingApplicants crewApplicants={this.props.crewApplicants}
                                        filterCity={this.props.filterCity}
                                        filterName={this.props.filterName}
                                        requiredStatus={'Interviewing'}
                />
                <HiredApplicants crewApplicants={this.props.crewApplicants}
                                 filterCity={this.props.filterCity}
                                 filterName={this.props.filterName}
                                 requiredStatus={'Hired'}
                />
            </div>
        );
    }
}
export default CrewApplicants;