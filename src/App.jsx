import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import NominationForm from "./components/NominationForm"
import Details from "./components/Details"
import { ToastContainer } from "react-toastify"
function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/nomination-form" element={<NominationForm/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </>
  )
}

export default App
