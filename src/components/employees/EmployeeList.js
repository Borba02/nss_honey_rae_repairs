import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);
  const [listOfSpecialties, updateSpecialties] = useState("")
  const history = useHistory()

  useEffect(() => {
    fetch("http://localhost:8088/employees")
      .then((res) => res.json())
      .then((employeeArray) => {
        setEmployee(employeeArray);
      });
  }, []);

  useEffect(
      () => {
        const ESO = employees.map(
              (employeespecialtyObj) => employeespecialtyObj.specialty)
                  updateSpecialties(ESO.join(", "))
      },[employees]
  )

  return (
    <>
      <div>
        <button onClick={() => history.push("/employees/hiring")}>Add Employee </button>
      </div>
        <div>Specialties: {listOfSpecialties}</div>
      {employees.map((employeeObj) => {
        return <h3 key={`employee--${employeeObj.id}`}>{employeeObj.name}</h3>;
      })}
    </>
  );
};
