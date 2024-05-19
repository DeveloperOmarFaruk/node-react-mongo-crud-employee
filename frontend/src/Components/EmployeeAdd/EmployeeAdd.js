import React from "react";
import useFunction from "../../Hooks/useFunction";

const EmployeeAdd = () => {
  const {
    nameRef,
    emailRef,
    phoneRef,
    adressRef,
    salaryRef,
    joiningDateRef,

    idNumberRef,
    employeeTypeRef,
    handleAddSubmit,
  } = useFunction();

  return (
    <>
      <h1 className="text-center mt-4 text-info-emphasis text-uppercase text-underline fw-bolder">
        Employee&nbsp; Add&nbsp; Form
      </h1>

      <form
        style={{
          width: "40%",
          margin: "4rem auto",
          display: "block",
        }}
        onSubmit={handleAddSubmit}
      >
        <div className="form-floating mb-4 mt-4">
          <input
            type="number"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="ID"
            ref={idNumberRef}
          />
          <label for="floatingInput"> ID</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="text"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Name"
            ref={nameRef}
          />
          <label for="floatingInput">Name</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="email"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Email"
            ref={emailRef}
          />
          <label for="floatingInput">Email</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="number"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Phone"
            ref={phoneRef}
          />
          <label for="floatingInput">Phone</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="text"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Adress"
            ref={adressRef}
          />
          <label for="floatingInput">Adress</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <input
            type="number"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Salary"
            ref={salaryRef}
          />
          <label for="floatingInput">Salary</label>
        </div>

        <div className="form-floating mb-4 mt-4">
          <select
            className="form-select border border-info"
            id="floatingSelect"
            aria-label="Floating label select example"
            ref={employeeTypeRef}
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
            placeholder="Joining Date"
            ref={joiningDateRef}
          />
          <label for="floatingInput">Joining Date</label>
        </div>

        {/* <div className="form-floating mb-4 mt-4">
          <input
            type="file"
            className="form-control border border-info"
            id="floatingInput"
            placeholder="Image"
            ref={imageRef}
          />
          <label for="floatingInput">Image</label>
        </div> */}

        <div className="form-floating mb-4 mt-4">
          <button type="submit" className="btn btn-info pl-4 pr-4 ">
            Employee Added
          </button>
        </div>
      </form>
    </>
  );
};

export default EmployeeAdd;
