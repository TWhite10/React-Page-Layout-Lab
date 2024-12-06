import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import EmployeeList from "./components/EmployeeList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import EmployeeListItem from "./components/EmployeeListItem.jsx";
import  Homepage from "../pages/Homepage.jsx";


function App() {
  return (
    <div className='App'>
     <Header/> 
      <SearchBar/>
      <EmployeeList/>
      <EmployeeListItem/>
      < Homepage/>

    </div>
  )
}

export default App