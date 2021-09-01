import React from "react";
import EditExp from "./components/forms/experience/EditExp";
import EditEducation from "./components/forms/education/EditEducation";
import EditExtra from "./components/forms/skill/EditExtra";
import PersonalDataForm from "./components/forms/PersonalData";
import LeftDrawer from "./components/drawer/LeftDrawer";
import OpenDrawer from "./components/drawer/OpenDrawer";
import Template from "./components/templates/Template";

import "./styles/app.css";
import Routes from "./Routes";
import "./styles/landing.css";
function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Routes />
    </div>
  );
}

export default App;
