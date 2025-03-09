import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import CardDisplay from './components/CardDisplay';
import CardDetail from './components/CardDetail';

function App() {
  
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<CardDisplay />} />
        <Route path="/detail/:id" element={<CardDetail />} />
      </Routes>
    </>
  )
}

export default App
