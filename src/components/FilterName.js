import React, { Component } from 'react';

class FilterName extends Component {
    render() {
        return (
            <input className={'col s12 m5 offset-m1'}
                   type="text"
                   name={'filterName'}
                   placeholder={'Name'}
            />
        );
    }
}

export default FilterName;