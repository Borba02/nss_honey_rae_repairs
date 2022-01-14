import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, addEmployee] = useState({
        name: "",
        specialty: ""
    })

    const history = useHistory()

    const saveEmployee = (evt) => {
      evt.preventDefault()
    
    const newEmployee = {
      name: employee.name,
      specialty: employee.specialty
    }

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmployee)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
      .then(() => 
        history.push("/employees")
      )
  }

    return (
        <form className="employeeForm">
          <h2 className="employeeForm__title">Add New Employee</h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                required
                autoFocus
                type="text"
                className="form-control"
                placeholder="Employee's Name"
                onChange={(evt) => {
                  const copy = { ...employee };
                  copy.name = evt.target.value;
                  addEmployee(copy);
                }}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="specialty">Specialty:</label>
              <input
                required
                autoFocus
                type="text"
                className="form-control"
                placeholder="Employee's Specialty"
                onChange={(evt) => {
                  const copy = { ...employee };
                  copy.specialty = evt.target.value;
                  addEmployee(copy);
                }}
              />
            </div>
          </fieldset>
          <button className="btn btn-primary" onClick={saveEmployee}>
        Submit New Employee
      </button>
    </form>
    )
}