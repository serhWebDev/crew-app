import React, { Component } from 'react';

class FilterCity extends Component {
    render() {
        return (
            <input list="filterCity"
                   className={'col s12 m5 offset-m1'}
                   type="text"
                   name={'filterCity'}
                   placeholder={'City'}
            />
        );
    }
}

export default FilterCity;