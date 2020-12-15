import React, { useEffect, useState } from "react";

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  },[]);

  return (
    <div className="row">
      <h1>Employees List</h1>
      <table className="table">
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
