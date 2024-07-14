import Dashboard from "@screens/dashboard/Dashboard";
import Login from "@screens/login/Login";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
