import React, { Component } from 'react';

import CrewApplicantCard from "./CrewApplicantCard";

class ApplicantsList extends Component {

    componentWillReceiveProps(nextprops) {
        this.setState({
            filterCity: this.props.stateFilterData.filterCity,
            filterName: this.props.stateFilterData.filterName
        });

        /*console.log(this.props.stateFilterData.filterCity + '_filterCity');
        console.log(this.props.stateFilterData.filterName + '_filterName');
        console.log('componentWillReceiveProps');*/
    }

    render() {
        let requiredStatus = this.props.requiredStatus;
        let filterCity = this.props.stateFilterData.filterCity;
        let filterName = this.props.stateFilterData.filterName;

        /*console.log(filterCity + ' = inrender');*/
        return this.props.crewApplicants.map((e) => {
            if (requiredStatus === e.status && (filterCity === 'nofilt' || filterCity === e.city)){
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