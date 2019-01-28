import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title';
import CrewApplicants from './components/CrewApplicants';
import Form from "./components/Form"
import config from './config';

class App extends Component {

    /*geting Filter Data*/
    getFilterData = async (e) => {
        e.preventDefault();
        const filterCity = e.target.elements.filterCity.value.toLowerCase();
        if (filterCity === '') {
            this.setState({
                filterCity: 'nofilt'
            })
        } else {
            this.setState({
                filterCity: filterCity
            })
        }
        const filterName = e.target.elements.filterName.value.toLowerCase();
        if (filterName === '') {
            this.setState({
                filterName: 'nofilt'
            })
        } else {
            this.setState({
                filterName: filterName
            })
        }
    };

    /*Initialisation of state*/
    constructor(props){
        super(props);
        this.state = {
            filterCity: 'nofilt',
            filterName: 'nofilt',
            candidates: []
        };
    };
    /*geting API Data*/
    componentWillMount() {
        /*Data sources URL:*/
        axios.get(config.apiUrl)
            .then(res => this.setState({
                candidates: res.data.results.map( function(el) {
                    let applicant = {
                        id: el.cell,
                        city: el.location.city,
                        name: {
                            'titleName': el.name.title,
                            'firstName': el.name.first,
                            'lastName': el.name.last,
                        },
                        avatar: el.picture.medium,
                        status: 'Interviewing'
                    };
                    return applicant;
                })
            }));
    }

    render(){
        return (
          <div>
              <Title/>
              <Form getFilterData={this.getFilterData}/>
              <CrewApplicants crewApplicants={this.state.candidates}
                              filterCity={this.state.filterCity}
                              filterName={this.state.filterName}
              />
          </div>
        );
      }
};

export default App;


