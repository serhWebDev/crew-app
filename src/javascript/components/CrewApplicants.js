import React, { Component } from 'react';

import ApplicantsListContainer from './ApplicantsListContainer';

class CrewApplicants extends Component {
    render() {
        return (
            <div className="row">
                {this.props.applicantsStatuses.map((el,id) => (
                    <ApplicantsListContainer
                        key={id}
                        requiredStatus={el}
                        crewApplicants={this.props.crewApplicants}
                        statusChange={(id, action) => this.props.statusChange(id, action)} />
                ))}
            </div>
        );
    }
}

export default CrewApplicants;