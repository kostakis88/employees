import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService'

interface CreateEmployeeProps {
  history: Array<string>
}

const CreateEmployee: React.FC<CreateEmployeeProps> = (props) => {
  const { history } = props

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const handleFirstNameChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setFirstName(ev.currentTarget.value)
  }

  const handleLastNameChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setLastName(ev.currentTarget.value)
  }

  const handleEmailChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setEmail(ev.currentTarget.value)
  }

  const saveEmployee = (ev: React.MouseEvent) => {
    ev.preventDefault()
    let employee = { firstName: firstName, lastName: lastName, email: email }
    console.log('employee =>', JSON.stringify(employee))

    EmployeeService.createEmployee(employee).then((response) => {
      history.push('/employees')
    })
  }

  const handleCancel = () => {
    history.push('/employees')
  }

  return (<div className='container'>
    <div className='row'>
      <div className='card col-md-6 offset-md-3 offset-md-3'>
        <h3 className='text-center'>Add Employee</h3>
        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label>First Name: </label>
              <input placeholder='First Name' name='firstName' className='form-control' value={firstName} onChange={handleFirstNameChange}/>
            </div>
            <div className='form-group'>
              <label>Last Name: </label>
              <input placeholder='Last Name' name='lastName' className='form-control' value={lastName} onChange={handleLastNameChange}/>
            </div>
            <div className='form-group'>
              <label>Email: </label>
              <input placeholder='Email' name='email' className='form-control' value={email} onChange={handleEmailChange}/>
            </div>
            <button className='btn btn-success' onClick={saveEmployee} type="submit">Save Employee</button>
            <button className='btn btn-danger' onClick={handleCancel} type="button">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  </div>)
}

export default CreateEmployee