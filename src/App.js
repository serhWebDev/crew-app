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
            filterCity: '',
            filterName: '',
            candidates: [],
            idLeftRight: null,
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
                filterCity: ''
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
                filterName: ''
            })
        } else {
            this.setState({
                filterName: filterName
            })
        }
    };

    previousStatus = (i) => {
        this.setState({idLeftRight: i});
        function checkingStatusLeft(currentStatusLeft) {
            switch (currentStatusLeft) {
                case 'Hired':
                    return 'Interviewing';
                case 'Interviewing':
                    return 'Applied';
                default:
            }
        }
        this.setState({ candidates: this.state.candidates.map((e,idArr)=>{
                if (this.state.candidates[idArr].status !== 'Applied' && i === idArr) {
                    let applicant = {
                        id: this.state.candidates[idArr].id,
                        avatar: this.state.candidates[idArr].avatar,
                        name: {
                            'titleName': this.state.candidates[idArr].name.titleName,
                            'firstName': this.state.candidates[idArr].name.firstName,
                            'lastName': this.state.candidates[idArr].name.lastName,
                        },
                        city: this.state.candidates[idArr].city,
                        status: checkingStatusLeft(this.state.candidates[idArr].status)
                    };
                    return applicant;
                }  else {
                    return e;
                }
            })});
    };

    nextStatus = (i) => {
        this.setState({idLeftRight: i});
        function checkingStatusRight(currentStatusRight) {
            switch (currentStatusRight) {
                case 'Applied':
                    return 'Interviewing';
                case 'Interviewing':
                    return 'Hired';
                default:
            }
        }
        this.setState({ candidates: this.state.candidates.map((e,idArr)=>{
                if (this.state.candidates[idArr].status !== 'Hired' && i === idArr) {
                    let applicant = {
                        id: this.state.candidates[idArr].id,
                        avatar: this.state.candidates[idArr].avatar,
                        name: {
                            'titleName': this.state.candidates[idArr].name.titleName,
                            'firstName': this.state.candidates[idArr].name.firstName,
                            'lastName': this.state.candidates[idArr].name.lastName,
                        },
                        city: this.state.candidates[idArr].city,
                        status: checkingStatusRight(this.state.candidates[idArr].status)
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
              <Title />
              <Form getFilterData={this.getFilterData}
                    allGeo={this.state.candidates} />
              <CrewApplicants crewApplicants={this.state.candidates}
                              filterCity={this.state.filterCity}
                              filterName={this.state.filterName}
                              nextStatus={this.nextStatus}
                              previousStatus={this.previousStatus}
                              idLeftRight={this.state.idLeftRight}
              />
          </div>
        );
      }
}

export default App;


