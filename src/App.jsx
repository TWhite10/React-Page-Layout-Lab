import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import EmployeeListItem from "./components/EmployeeListItem.jsx";
import HomePage from "../pages/Homepage.jsx";
import EmployeePage from "../pages/EmployeePage.jsx";

function App() {
  return (
    <div className="App" style={{ border: "2px solid white" }}>
      App
      <div style={{ border: "2px solid orange", padding: "10px" }}>
        HP
        <HomePage />
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          <Header />
        </div>
        <div style={{ border: "2px solid green", padding: "10px" }}>
          <SearchBar />
        </div>
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          <EmployeeList />
          <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          <EmployeeListItem />
        </div>
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          <EmployeeListItem />
        </div>
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          <EmployeeListItem />
        </div>
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          <EmployeeListItem />
        </div> 
        </div>
      </div>
      <div style={{ border: "2px solid brown", padding: "10px" }}>
        EP
        <EmployeePage />
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          
          <Header />
        </div>
        <div style={{ border: "2px solid lightblue", padding: "10px" }}>
          
          Infomation about the employee 
        </div>

      </div>
    
      
      
      
    </div>
  );
}

export default App;
