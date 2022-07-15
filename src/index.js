import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setupMockServer } from "./mockserver/serve";
import { BrowserRouter as Router } from "react-router-dom";
import { Registrationprov } from "./contexts/Registrationprov";
import { Authprov } from "./contexts/Authcontext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

setupMockServer();
/*
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

*/
root.render(
  <StrictMode>
    <Authprov>
      <Registrationprov>
        <Router>
          <App />
        </Router>
      </Registrationprov>
    </Authprov>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
