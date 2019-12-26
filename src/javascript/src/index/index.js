import React, { Component } from 'react';
import axios from 'axios';
import {
    apiPath,
    applicantsStatuses
} from './config';
import normalizer from './normalizer';
import CrewApplicants from '../../components/CrewApplicants';
import Form from '../../components/Form'

class Index extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            candidates: [],
            filters: {
                city: null,
                name: null
            }
        };
    };

    statusChange = (id, action = 'inc') => {
        const {
            candidates
        } = this.state;

        const newCandidates = candidates.map((el,index) => {
            if ((id === el.id) && ((action === 'inc' && el.status !== 2) || (action === 'dec' && el.status !== 0))) {
                let applicant = {
                    ...el,
                    status: el.status + (action === 'inc' ? 1 : - 1)
                };
                return applicant;
            } else {
                return el;
            }
        })
        this.setState({ candidates: newCandidates })
    };

    fetchAssets() {
        const requestData = '?nat=gb&results=10';
        axios.get(apiPath + requestData)
            .then(res => {
                const candidates = res.data.results.map( el => normalizer(el));
                this.setState({
                    candidates: candidates
                })
            })
            .finally(() => this.setState({isLoading: false}));
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchAssets();
    }

    filterData(type, value) {
        this.setState({
            filters: {
                ...this.state.filters,
                [type]:value
            }
        })
    }

    render(){
        const {
            candidates,
            isLoading,
            filters
        } = this.state;

        if (isLoading) {
            return (
                <div>
                    <h1 style={{textAlign:'center'}}>is Loading...</h1>
                </div>
            )
        }

        const sorterModels = candidates.filter(item => {
            if (!!filters.city && !item.city.includes(filters.city)) {
                return false;
            }
            if (!!filters.name && !item.name.name.includes(filters.name)) {
                return false;
            }
            return true;
        });

        return (
            <div>
                <Form onChange={(type, value)=> this.filterData(type, value)} />
                <CrewApplicants
                    applicantsStatuses={applicantsStatuses}
                    crewApplicants={sorterModels}
                    statusChange={(id, action) => this.statusChange(id, action)}
                />
            </div>
        );
    }
}

export default Index;


