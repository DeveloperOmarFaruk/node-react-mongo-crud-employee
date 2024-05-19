import React, { useEffect } from "react";
import { useParams } from "react-router";
import useFunction from "../../Hooks/useFunction";

const EmployeeUpdate = () => {
  const { id } = useParams();
  const {
    employee,
    setEmployee,
    URL,
    alert,
    navigate,
    nameHandleChange,
    joiningDateHandleChange,
    salaryHandleChange,
    addressHandleChange,
    phoneHandleChange,
    emailHandleChange,

    idNumberHandleChange,
    typeHandleChange,
  } = useFunction();

  const DymURL = `${URL}/${id}`;

  useEffect(() => {
    fetch(DymURL)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, [DymURL]);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(DymURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert.show("Employee Update successful");
          navigate("/");
        }
      });

    console.log(employee);
  };

  return (
    <>
      <h1 className="text-center mt-4 text-info-emphasis text-uppercase text-underline fw-bolder">
        Employee&nbsp; Update&nbsp; Form
      </h1>

      <form
        style={{ width: "40%", margin: "4rem auto", display: "block" }}
        onSubmit={handleUpdate}
      >
        <div className="form-floating mb-4 mt-4">
          <input
            type="number"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="ID"
            value={employee.idNumber || ""}
            onChange={idNumberHandleChange}
          />
          <label for="floatingInput"> ID</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="text"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Name"
            value={employee.name || ""}
            onChange={nameHandleChange}
          />
          <label for="floatingInput">Employee Name</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="email"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Email"
            value={employee.email || ""}
            onChange={emailHandleChange}
          />
          <label for="floatingInput">Employee Email</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="number"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Phone"
            value={employee.phone || ""}
            onChange={phoneHandleChange}
          />
          <label for="floatingInput">Employee Phone</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="text"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Adress"
            value={employee.address || ""}
            onChange={addressHandleChange}
          />
          <label for="floatingInput">Employee Adress</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="number"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Salary"
            value={employee.salary || ""}
            onChange={salaryHandleChange}
          />
          <label for="floatingInput">Employee Salary</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <select
            className="form-select border border-info"
            id="floatingSelect"
            aria-label="Floating label select example"
            value={employee.employeeType}
            onChange={typeHandleChange}
          >
            <option selected>Select</option>
            <option value="Manager">Manager</option>
            <option value="Acounting">Acounting</option>
            <option value="Marketing">Marketing</option>
            <option value="Office Assistent">Office Assistent</option>
            <option value="Delivery Man">Delivery Man</option>
            <option value="Driver">Driver</option>
          </select>
          <label for="floatingSelect">Employee Type</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="date"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Joining Date"
            value={employee.joiningDate || ""}
            onChange={joiningDateHandleChange}
          />
          <label for="floatingInput">Employee Joining Date</label>
        </div>
        {/* 
        <div className="form-floating mb-4 mt-4">
          <input
            type="file"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Employee Image"
            // value={employee.image || ""}
            onChange={imageHandleChange}
          />
          <label for="floatingInput">Employee Image</label>
        </div> */}

        <div className="form-floating mb-4 mt-4">
          <button type="submit" className="btn btn-info pl-4 pr-4 ">
            Employee Update
          </button>
        </div>
      </form>
    </>
  );
};

export default EmployeeUpdate;
