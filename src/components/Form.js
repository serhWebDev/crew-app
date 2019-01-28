import React, { Component } from 'react';
class Form extends Component {
    render() {
        return (
            <div className='container'>
                <div className='card-panel'>
                    <form onSubmit={this.props.getFilterData}>
                        <h5 className='center-align'><b>Filter</b></h5>
                        <div className={'col s12 m12'} >
                            <input type="text" name={'filterCity'} placeholder={'City'}/>
                            <input type="text" name={'filterName'} placeholder={'Name'}/>
                        </div>
                        <button className="waves-effect green lighten-2 btn col s12 m12">Filter</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Form;