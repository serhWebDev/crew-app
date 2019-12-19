import React, { Component } from 'react';
import FilterName from './FilterName';
import FilterCity from './FilterCity';

class Form extends Component {
    render() {
        return (
            <div>
                <div className='card-panel'>
                    <form onSubmit={this.props.getFilterData}>
                        <h6 className='center-align'><b>Filter</b></h6>
                        <div className={'row'} >
                            <FilterName />
                            <FilterCity allGeo={this.props.allGeo}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;