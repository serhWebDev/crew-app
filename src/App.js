import React, { Component, Fragment } from 'react';
import Index from '../src/javascript/src/index/index';
import Navbar from '../src/javascript/components/Navbar';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Navbar
                    title={'Crew app'}/>
                <Index />
            </Fragment>
        )
    }
}

export default App;


