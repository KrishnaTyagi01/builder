import React, { ReactElement, useContext } from "react";
import { GlobalContext } from "../../context/reducers/provider";

interface Props {}

const EduTemp = () => {
  const state = useContext(GlobalContext);
  const educationState = state["educationState"]?.allEdu;

  return (
    <div className="temp_edu" style={{ paddingLeft: 20 }}>
      <h4 className="temp_head">Education</h4>
      <hr className="hr_dashed" />

      {educationState?.map((edu, i) => (
        <div className="temp_edu_inner" key={i}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="temp_edu_institution">{edu?.institution}</span>
            <span className="temp_edu_major">Major: {edu?.major}</span>
          </div>
          <span className="temp_edu_year">
            {edu?.startDate} - {edu?.endDate}
          </span>
        </div>
      ))}
    </div>
  );
};

export default EduTemp;
