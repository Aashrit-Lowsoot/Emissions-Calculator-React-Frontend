import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { Protected } from "./routes/Protected";
import { Protpage } from "./pages/Protpage";
import { Dashboard } from "./pages/Dashboard";
import { Databoard } from "./pages/Databoard";
import { Report } from "./pages/Report";
import { Signup } from "./pages/Signup";
// import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Databoard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/visualize" element={<Dashboard />} />
        <Route path="/databoard" element={<Databoard />} />
        <Route
          path="/prot"
          element={
            <Protected>
              <Protpage />
            </Protected>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
