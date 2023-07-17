import { Routes, Route } from "react-router-dom";
import Home from "../components/pure/pages/Home";
import Register from "../components/pure/pages/Register";
import Login from "../components/pure/pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />}/>
    
      </>
    </Routes>
  );
}
export default AppRoutes;
