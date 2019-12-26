import React  from 'react';

const Input  = (props) => (
    <div className={props.className}>
        <label htmlFor={props.name}>{props.label}</label>
        <input type="text"
               name={props.name}
               placeholder={props.placeholder}
               onChange={(event) => props.onChange(props.name, event.target.value)}
        />
    </div>
);

export default Input;