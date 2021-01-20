import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'

interface ListProps {
  history: Array<string>
}

const List: React.FC<ListProps> = (props) => {
  const { history } = props

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees()
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  },[]);

  const addEmployee = () => {
    history.push('/add-employee')    
  }

  const handleUpdate = (employee: number) => {
    history.push(`/update-employee/${employee}`)
  }

  return (
    <div className="row">
      <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
      <h1>Employees List</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee First Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee: any) => {
            return (
              <tr key={employee.email}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td><button onClick={() => handleUpdate(employee.id)}>Update</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
