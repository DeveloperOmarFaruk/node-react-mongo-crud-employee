import { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";

const useFunction = () => {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState({});
  const alert = useAlert();
  const navigate = useNavigate();
  const idNumberRef = useRef("");
  const employeeTypeRef = useRef("");
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const adressRef = useRef("");
  const salaryRef = useRef("");
  const joiningDateRef = useRef("");
  // const imageRef = useRef("");
  const URL = `http://localhost:5000/employees`;

  // ===========================
  // Employee Form add function
  // ===========================

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = adressRef.current.value;
    const salary = salaryRef.current.value;
    const joiningDate = joiningDateRef.current.value;
    // const image = imageRef.current.value;
    const idNumber = idNumberRef.current.value;
    const employeeType = employeeTypeRef.current.value;

    const employeeAdd = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      salary: salary,
      joiningDate: joiningDate,
      // image: image,
      idNumber: idNumber,
      employeeType: employeeType,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert.show("Employee add successful");
          navigate("/");
        }
      });
  };

  // ========================================
  // Employee Data Load & Show List function
  // =========================================

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, [URL]);

  // ========================================
  // Employee Data Delete function
  // =========================================

  const handleEmployeeDelete = (id) => {
    const DymURL = `${URL}/${id}`;
    fetch(DymURL, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert.show("Employee Delete successful");
          const remainingData = employees.filter(
            (employee) => employee._id !== id
          );
          setEmployees(remainingData);
        }
      });
  };

  // ========================================
  // Employee Data Update function
  // =========================================

  const nameHandleChange = (e) => {
    const updateName = e.target.value;
    const updateEmployee = {
      name: updateName,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      salary: employee.salary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  const emailHandleChange = (e) => {
    const updateEmail = e.target.value;
    const updateEmployee = {
      name: employee.name,
      email: updateEmail,
      phone: employee.phone,
      address: employee.address,
      salary: employee.salary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  const phoneHandleChange = (e) => {
    const updatePhone = e.target.value;
    const updateEmployee = {
      name: employee.name,
      email: employee.email,
      phone: updatePhone,
      address: employee.address,
      salary: employee.salary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  const addressHandleChange = (e) => {
    const updateAdress = e.target.value;
    const updateEmployee = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: updateAdress,
      salary: employee.salary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  const salaryHandleChange = (e) => {
    const updateSalary = e.target.value;
    const updateEmployee = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      salary: updateSalary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  const joiningDateHandleChange = (e) => {
    const updateJoiningDate = e.target.value;
    const updateEmployee = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      salary: employee.salary,
      joiningDate: updateJoiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  // const imageHandleChange = (e) => {
  //   const updateImage = e.target.value;
  //   const updateEmployee = {
  //     name: employee.name,
  //     email: employee.email,
  //     phone: employee.phone,
  //     address: employee.address,
  //     salary: employee.salary,
  //     joiningDate: employee.joiningDate,
  //     // image: updateImage,
  //     employeeType: employee.employeeType,
  //     idNumber: employee.idNumber,
  //   };

  //   setEmployee(updateEmployee);
  // };

  const idNumberHandleChange = (e) => {
    const updateIdNumber = e.target.value;
    const updateEmployee = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      salary: employee.salary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: employee.employeeType,
      idNumber: updateIdNumber,
    };

    setEmployee(updateEmployee);
  };

  const typeHandleChange = (e) => {
    const updateType = e.target.value;

    const updateEmployee = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      address: employee.address,
      salary: employee.salary,
      joiningDate: employee.joiningDate,
      // image: employee.image,
      employeeType: updateType,
      idNumber: employee.idNumber,
    };

    setEmployee(updateEmployee);
  };

  return {
    employees,
    employee,
    nameRef,
    emailRef,
    phoneRef,
    adressRef,
    salaryRef,
    joiningDateRef,
    idNumberRef,
    employeeTypeRef,
    URL,
    alert,
    navigate,
    handleAddSubmit,
    handleEmployeeDelete,
    setEmployees,
    setEmployee,
    nameHandleChange,
    joiningDateHandleChange,
    salaryHandleChange,
    addressHandleChange,
    phoneHandleChange,
    emailHandleChange,
    idNumberHandleChange,
    typeHandleChange,
  };
};

export default useFunction;
