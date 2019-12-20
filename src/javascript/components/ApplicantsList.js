import React, { Component } from 'react';
import UiCard from './card/ui-card';

class ApplicantsList extends Component {
    render() {
        const {
            crewApplicants,
            requiredStatus
        } = this.props;

        return crewApplicants.map(element => {
            if (requiredStatus === element.status ) {
                return (
                    <UiCard
                        id={element.id}
                        picture={element.avatar}
                        firstName={element.name.firstName}
                        lastName={element.name.lastName}
                        city={element.city}
                        status={element.status}
                        statusChange={(id, action) => this.props.statusChange(id, action)}
                    />
                )
            }
        })
    }
}

export default ApplicantsList;