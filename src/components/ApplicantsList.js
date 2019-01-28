import React, { Component } from 'react';
/*import of components*/
import CrewApplicantCard from "./CrewApplicantCard";

class ApplicantsList extends Component {

    componentWillReceiveProps(nextprops) {
        this.setState({
            filterCity: this.props.filterCity,
            filterName: this.props.filterName
        });
    }

    render() {
        let requiredStatus = this.props.requiredStatus;
        let filterCity = this.props.filterCity;
        let filterName = this.props.filterName;

        return this.props.crewApplicants.map((e) => {
            if (requiredStatus === e.status && ((filterCity === 'nofilt' || filterCity === e.city) && (filterName === 'nofilt' || filterName === e.name.firstName))) {
                return (<CrewApplicantCard
                    key={e.id}
                    picture={e.avatar}
                    city={e.city}
                    firstname={e.name.firstName}
                    lastname={e.name.lastName}
                    status={e.status}
                />)
            }
        })
    }
}
export default ApplicantsList;