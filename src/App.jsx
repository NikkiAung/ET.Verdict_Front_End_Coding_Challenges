import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomersDisplay from './components/CustomersDisplay';
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<CustomersDisplay />} />
      </Routes>
    </>
  )
}

export default App
