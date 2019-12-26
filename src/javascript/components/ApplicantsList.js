import React, { Component } from 'react';
import UiCard from './card/ui-card';

class ApplicantsList extends Component {
    render() {
        const {
            crewApplicants,
            requiredStatus
        } = this.props;

        return crewApplicants.map((element,id) => {
            if (requiredStatus === element.status ) {
                return (
                    <UiCard
                        key={id}
                        id={element.id}
                        picture={element.avatar}
                        name={element.name.name}
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