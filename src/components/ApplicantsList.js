import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            if (requiredStatus === e.status &&
                ((filterCity === 'nofilt' ||
                    filterCity === e.city) &&
                    (filterName === 'nofilt' ||
                        (filterName === e.name.firstName ||
                            filterName === e.name.lastName ||
                            filterName ===  e.name.firstName + ' ' + e.name.lastName
                        )
                    )
                )
            ) {
                return (<CrewApplicantCard
                        key={e.id}
                        id={e.id}
                        picture={e.avatar}
                        firstName={e.name.firstName}
                        lastName={e.name.lastName}
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

ApplicantsList.propTypes = {
    crewApplicants: PropTypes.array.isRequired,
    filterCity: PropTypes.string.isRequired,
    filterName: PropTypes.string.isRequired,
    requiredStatus: PropTypes.string.isRequired,
    nextStatus: PropTypes.func.isRequired,
    previousStatus: PropTypes.func.isRequired,
};

export default ApplicantsList;