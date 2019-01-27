import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title';
import CrewApplicants from './components/CrewApplicants';
import Form from "./components/Form"
/* config*/
import config from './config';

class App extends Component {

    /*geting Filter Data*/
    getFilterData = async (e) => {
        e.preventDefault();
        const filterCity = e.target.elements.filterCity.value;
        const filterName = e.target.elements.filterName.value;
        if (filterCity!=='') {
            console.log(filterCity);
        };
        if (filterName!=='') {
            console.log(filterName);
        };
        this.setState({
            filterData: {
                filterCity: filterCity,
                filterName: filterName
            }
        })
    }

    /*Initialisation of state*/
    constructor(props){
        super(props);
        this.state = {
            filterData:{
                filterCity: undefined,
                filterName: undefined
            },
            results:[]
        };
    }

    /*geting API Data*/
    componentDidMount() {
        /*Data sources URL:*/
        axios.get(config.apiUrl)
            .then(res => this.setState(res.data));
    }

    render(){
        return (
          <div>
              <Title />
              <Form getFilterData={this.getFilterData}/>
              <CrewApplicants crewApplicants={this.state.results} statefilterData={this.state.filterData}/>
          </div>
        );
      }
};

export default App;


