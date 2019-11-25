import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppliedApplicants from './AppliedApplicants';
import InterviewingApplicants from './InterviewingApplicants';
import HiredApplicants from './HiredApplicants';

class CrewApplicants extends Component {

    render() {
        return (
            <div className="row">
                <div>
                    <AppliedApplicants requiredStatus={'Applied'}
                                       crewApplicants={this.props.crewApplicants}
                                       filterCity={this.props.filterCity}
                                       filterName={this.props.filterName}
                                       nextStatus={this.props.nextStatus}
                                       previousStatus={this.props.previousStatus}
                                       idLeftRight={this.props.idLeftRight}
                    />
                    <InterviewingApplicants requiredStatus={'Interviewing'}
                                            crewApplicants={this.props.crewApplicants}
                                            filterCity={this.props.filterCity}
                                            filterName={this.props.filterName}
                                            nextStatus={this.props.nextStatus}
                                            previousStatus={this.props.previousStatus}
                                            idLeftRight={this.props.idLeftRight}
                    />
                    <HiredApplicants requiredStatus={'Hired'}
                                     crewApplicants={this.props.crewApplicants}
                                     filterCity={this.props.filterCity}
                                     filterName={this.props.filterName}
                                     nextStatus={this.props.nextStatus}
                                     previousStatus={this.props.previousStatus}
                                     idLeftRight={this.props.idLeftRight}

                    />
                </div>
            </div>
        );
    }
}

export default CrewApplicants;