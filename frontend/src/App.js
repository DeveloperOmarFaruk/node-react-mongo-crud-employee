import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  transitions,
  positions,
  types,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Navbar from "./Components/Navbar/Navbar";
import EmployeeAdd from "./Components/EmployeeAdd/EmployeeAdd";
import EmployeeList from "./Components/EmployeeList/EmployeeList";
import EmployeeUpdate from "./Components/EmployeeUpdate/EmployeeUpdate";

// optional configuration
const options = {
  position: positions.TOP_RIGHT,
  timeout: 4000,
  offset: "60px",
  transition: transitions.FADE,
  type: types.SUCCESS,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<EmployeeList />} />
          <Route path="/employee-add" element={<EmployeeAdd />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="/employee-update/:id" element={<EmployeeUpdate />} />
        </Routes>
      </Router>
    </AlertProvider>
  );
}
export default App;
