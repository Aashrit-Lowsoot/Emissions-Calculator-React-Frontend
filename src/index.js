import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Registrationprov } from "./contexts/Registrationprov";
import { Authprov } from "./contexts/Authcontext";
import { Databoardprovider } from "./contexts/Databoard";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <Authprov>
//       <Registrationprov>
//         <Router>
//           <App />
//         </Router>
//       </Registrationprov>
//     </Authprov>
//   </StrictMode>
// );
root.render(
  <Authprov>
    <Registrationprov>
      <Router>
        <Databoardprovider>
          <App />
        </Databoardprovider>
      </Router>
    </Registrationprov>
  </Authprov>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
