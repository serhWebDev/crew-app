import React, { Component } from 'react';
import uuid from 'uuid';

import CrewApplicantCard from "./CrewApplicantCard";

class ApplicantsList extends Component {
    render() {
        return this.props.crewApplicants.map((e) => (
            <CrewApplicantCard
                key={uuid.v4()}
                picture={e.picture.medium}
                city={e.location.city}
                firstname={e.name.first}
                lastname={e.name.last}
            />
        ))
    }
}
export default ApplicantsList;