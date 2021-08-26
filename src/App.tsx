import React from "react";
import EditExp from "./components/forms/experience/EditExp";
import EditEducation from "./components/forms/education/EditEducation";
import EditExtra from "./components/forms/skill/EditExtra";
import PersonalDataForm from "./components/forms/PersonalData";
import LeftDrawer from "./components/drawer/LeftDrawer";
import OpenDrawer from "./components/drawer/OpenDrawer";
import "./app.css";

function App() {
  return (
    // style = opendrawer ? blur: none
    <div className="App">
      {/* <PersonalDataForm /> */}
      {/* <EditExp /> */}
      {/* <EditEducation /> */}
      {/* <EditExtra /> */}
      <LeftDrawer />
      {/* <OpenDrawer>
        <PersonalDataForm />
      </OpenDrawer> */}
    </div>
  );
}

export default App;
