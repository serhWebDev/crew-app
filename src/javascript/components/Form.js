import React from 'react';
import Input from './Input';

const Form = (props) => (
    <form>
        <h6 className='center-align'><b>Filter</b></h6>
        <div className={'row'} >
            <Input
                name={'city'}
                label={'City'}
                className={'col s12 m6'}
                placeholder={'City'}
                onChange={(type,value) => props.onChange(type, value)} />
            <Input
                name={'name'}
                label={'Name'}
                className={'col s12 m6'}
                placeholder={'Name'}
                onChange={(type,value) => props.onChange(type, value)} />
        </div>
    </form>
);

export default Form;