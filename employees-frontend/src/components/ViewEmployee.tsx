import React, { useEffect, useState } from 'react'
import { match } from 'react-router'
import EmployeeService from '../services/EmployeeService';

interface ViewEmployeeProps {
  match: match<Params>
}

interface EmployeeProps {
  email: string
  firstName: string
  lastName: string
}

type Params = { id: string };

const ViewEmployee: React.FC<ViewEmployeeProps & EmployeeProps> = (props) => {
  const { match } = props

  const id = match.params.id
  const [employee, setEmployee] = useState<EmployeeProps | null>(null)

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response) => {
      setEmployee(response)
    })
  }, [])


  return (
    <div className="card col-md-6 offset-md-3">
      <h3 className="text-center">View Employee Details</h3>
      <div className="card-body">
        <div className="row">
          <label>Employee First Name:</label>
          <div>{employee?.firstName}</div>
        </div>
        <div className="row">
          <label>Employee Last Name:</label>
          <div>{employee?.lastName}</div>
        </div>
        <div className="row">
          <label>Employee Email:</label>
          <div>{employee?.email}</div>
        </div>
      </div>
    </div>
  )
}

export default ViewEmployee