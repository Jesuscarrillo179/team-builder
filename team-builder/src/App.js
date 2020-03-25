import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import Form from './components/Form';

const teamMembersArray = []

function App() {
  const [teamMembers, setTeamMembers] = useState(teamMembersArray);
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
  })
  
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  const onSubmit = event => {
    event.preventDefault()
    const newTeamMember = {
      id: uuid(),
      firstName: formValues.firstName,
      lastName: formValues.lastName,
    }
    setTeamMembers([...teamMembers, newTeamMember])
  }
  
  return (
    <div className="App">
      <h1>Sign up to be part of the team!</h1>
      <Form 
      onInputChange={onInputChange}
      formValues={formValues}
      onSubmit={onSubmit}
      />
      <h1>List of Team Members:</h1>
      {
      teamMembers.map(tm => <div className="Card" key={tm.id}>{tm.firstName} {tm.lastName}</div>)
      }

    </div>
  );
}

export default App;
