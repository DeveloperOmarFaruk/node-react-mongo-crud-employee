import React from "react";
import useFunction from "../../Hooks/useFunction";
import { useNavigate } from "react-router";

const EmployeeList = () => {
  const { employees, handleEmployeeDelete } = useFunction();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="text-center mt-4 text-info-emphasis text-uppercase text-underline fw-bolder">
        Employee&nbsp; List&nbsp; Show
      </h1>

      <table
        className="table table-info container-md text-center"
        style={{ margin: "3rem auto" }}
      >
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Adress</th>
            <th scope="col">Salary</th>
            <th scope="col">Employee Type</th>
            <th scope="col">Joining Date</th>
            {/* <th scope="col">Image</th> */}
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr className="text-left ">
              <th
                scope="row"
                className="text-center align-middle"
                key={employee._id}
              >
                {employee.idNumber}
              </th>
              <td className="align-middle">{employee.name}</td>
              <td className="align-middle">{employee.email}</td>
              <td className="align-middle">{employee.phone}</td>
              <td className="align-middle">{employee.address}</td>
              <td className="align-middle">{employee.salary}</td>
              <td className="align-middle">{employee.employeeType}</td>
              <td className="align-middle">{employee.joiningDate}</td>
              {/* <td className="text-center align-middle">
                <img
                  className="rounded"
                  style={{ width: "100px", height: "70px" }}
                  src={employee.image}
                  alt="employee_image"
                />
              </td> */}
              <td className="text-center align-middle">
                <button
                  type="button"
                  className="btn btn-success pt-1 pb-1 me-2"
                  onClick={() => {
                    navigate(`/employee-update/${employee._id}`);
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <dutton
                  type="button"
                  className="btn btn-danger pt-1 pb-1 ms-2"
                  onClick={() => {
                    handleEmployeeDelete(employee._id);
                  }}
                >
                  <i className="fa-solid fa-x"></i>
                </dutton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
