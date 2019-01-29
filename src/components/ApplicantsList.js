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

        return this.props.crewApplicants.map((e, i) => {
            if (requiredStatus === e.status && ((filterCity === 'nofilt' || filterCity === e.city) && (filterName === 'nofilt' || filterName === e.name.firstName))) {
                return (<CrewApplicantCard
                        key={e.id}
                        id={e.id}
                        picture={e.avatar}
                        firstname={e.name.firstName}
                        lastname={e.name.lastName}
                        city={e.city}
                        status={e.status}
                        nextStatus={this.props.nextStatus}
                        previousStatus={this.props.previousStatus}
                    />
                )
            }
        })
    }
}
export default ApplicantsList;