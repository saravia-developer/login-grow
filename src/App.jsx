import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Login from "./page/auth/login/Login";
import ProtectedRoutes from "./page/auth/login/ProtectedRoutes/ProtectedRoutes";
import Dashboard from "./page/dashboard/Dashboard";
// import UserTypes from "./page/UserTypes/UserTypes";

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<ProtectedRoutes> <Dashboard /> </ProtectedRoutes>} />
        <Route path='*' element={<Navigate to='/login' />} />

      </Routes>
    </Router>
  );
}

export default App;
