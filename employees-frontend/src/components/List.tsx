import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees()
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  },[]);

  return (
    <div className="row">
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
