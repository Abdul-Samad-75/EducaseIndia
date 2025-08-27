
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './style.css'
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Profile from "./components/Profile";
// import Login from "./components/Login";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
  )
}

export default App
