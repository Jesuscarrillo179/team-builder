import React from 'react';

function Form (props) {
    return(
        <form onSubmit={props.onSubmit}> 
            <label> First Name
            <input
                onChange={props.onInputChange} 
                value={props.formValues.firstName}
                name='firstName'
                type='text'
            />
            </label>
            <label> Last Name 
            <input 
                onChange={props.onInputChange}
                value={props.formValues.lastName}
                name='lastName'
                type='text'
            />
            </label>
            <br />
            <input type='submit'/>
        </form>
    );
}

export default Form;