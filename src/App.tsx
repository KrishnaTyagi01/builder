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

function App() {
  return (
    // style = opendrawer ? blur: none
    <div className="App" style={{ position: "relative" }}>
      <LeftDrawer />
      {/* <div
          style={{
            position: "fixed",
            // top: "50%",
            left: "50%",
            width: "50%",
            transform: `translateX(-50%)`,
          }}
        >
          <Template />
        </div> */}
    </div>
  );
}

export default App;
