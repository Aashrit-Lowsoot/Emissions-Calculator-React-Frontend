import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { Protected } from "./routes/Protected";
import { Protpage } from "./pages/Protpage";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/free" element={<FreeComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
