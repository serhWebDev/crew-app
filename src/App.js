import React, { Component } from 'react';
import axios from 'axios';

import config from './config';
import Title from './components/Title';
import CrewApplicants from './components/CrewApplicants';
import Form from "./components/Form"

let applicStatus = ['Applied','Interviewing','Hired'];

class App extends Component {

    /*Initialisation of state*/
    constructor(props){
        super(props);
        this.state = {
            filterCity: 'nofilt',
            filterName: 'nofilt',
            candidates: []
        };
    };

    /*geting Filter Data*/
    getFilterData = async (e) => {
        e.preventDefault();
        /*geting filterCity*/
        const filterCity = e.target.elements.filterCity.value.toLowerCase();
        /*checking City*/
        if (filterCity === '') {
            this.setState({
                filterCity: 'nofilt'
            })
        } else {
            this.setState({
                filterCity: filterCity
            })
        }
        /*geting filterName*/
        const filterName = e.target.elements.filterName.value.toLowerCase();
        /*checking Name*/
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

    previousStatus = async (e)  => {
        e.preventDefault();
        function checkingStatusLeft(currentStatusLeft) {
            switch (currentStatusLeft) {
                case 'Hired':
                    return 'Interviewing';
                case 'Interviewing':
                    return 'Applied';
                default:
            }
        }
        this.setState({ candidates: this.state.candidates.map((e,i)=>{
                if (this.state.candidates[i].status !== 'Applied') {
                    let applicant = {
                        id: this.state.candidates[i].id,
                        avatar: this.state.candidates[i].avatar,
                        name: {
                            'titleName': this.state.candidates[i].name.titleName,
                            'firstName': this.state.candidates[i].name.firstName,
                            'lastName': this.state.candidates[i].name.lastName,
                        },
                        city: this.state.candidates[i].city,
                        status: checkingStatusLeft(this.state.candidates[i].status)
                    };
                    return applicant;
                }  else {
                    return e;
                }
            })});
    };

    nextStatus = async (e) => {
        e.preventDefault();
        function checkingStatusRight(currentStatusRight) {
            switch (currentStatusRight) {
                case 'Applied':
                    return 'Interviewing';
                case 'Interviewing':
                    return 'Hired';
                default:
            }
        }
        this.setState({ candidates: this.state.candidates.map((e,i)=>{
                if (this.state.candidates[i].status !== 'Hired') {
                    let applicant = {
                        id: this.state.candidates[i].id,
                        avatar: this.state.candidates[i].avatar,
                        name: {
                            'titleName': this.state.candidates[i].name.titleName,
                            'firstName': this.state.candidates[i].name.firstName,
                            'lastName': this.state.candidates[i].name.lastName,
                        },
                        city: this.state.candidates[i].city,
                        status: checkingStatusRight(this.state.candidates[i].status)
                    };
                    return applicant;
                } else {
                    return e;
                }
            })});
    };

    /*geting API Data*/
    componentWillMount() {
        /*Data sources URL:*/
        function randomApplicantStatus(firstStatusId, lastStatusId) {
            var rand = firstStatusId + Math.random() * (lastStatusId - firstStatusId);
            rand = Math.round(rand);
            return rand;
        }
        axios.get(config.apiUrl)
            .then(res => this.setState({
                candidates: res.data.results.map( function(el) {
                    let applicant = {
                        id: el.cell,
                        avatar: el.picture.medium,
                        name: {
                            'titleName': el.name.title,
                            'firstName': el.name.first,
                            'lastName': el.name.last,
                        },
                        city: el.location.city,
                        status: applicStatus[randomApplicantStatus(0, applicStatus.length-1)]
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
                              nextStatus={this.nextStatus}
                              previousStatus={this.previousStatus}
              />
          </div>
        );
      }
}

export default App;


