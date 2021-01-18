const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'

class EmployeeService {
  
  getEmployees = () => {
    return fetch(EMPLOYEE_API_BASE_URL)
  }

  createEmployee = (employee: object) => {
    return fetch(EMPLOYEE_API_BASE_URL, {
      method: "POST",
      body: JSON.stringify(employee),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
  }

}

export default new EmployeeService()