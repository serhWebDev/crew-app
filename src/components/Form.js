import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card-panel'>
                    <form onSubmit={this.props.getFilterData}>
                        <h6 className='center-align'><b>Filter</b></h6>
                        <div className={'col s12'} >
                            <input type="text" name={'filterCity'} placeholder={'City'}/>
                            <input type="text" name={'filterName'} placeholder={'Name'}/>
                        </div>
                        <div className="center">
                            <button className="waves-effect green lighten-2 btn">Filter</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;