import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HOMEPAGE_ROUTES, DASHBOARD_ROUTES } from "./routes";

import HomePage from "./HomePage";
import Dashboard from "./Dashbaord";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={HOMEPAGE_ROUTES} element={<HomePage />} />
          <Route path={DASHBOARD_ROUTES} element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
