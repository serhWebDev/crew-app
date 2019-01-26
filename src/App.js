import React, { Component } from 'react';
import axios from 'axios';

import Title from './components/Title';
import CrewApplicants from './components/CrewApplicants';
import Form from "./components/Form";
import config from './config';

class App extends Component {
    /*Initialisation of state*/
    constructor(props){
        super(props);
        this.state = {results:[]};
    }
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
              <CrewApplicants stateCrewApplicants={this.state.results} />
          </div>
        );
      }
};


export default App;


