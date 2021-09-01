import React, { ReactElement, useContext } from "react";
import { GlobalContext } from "../../context/reducers/provider";

interface Props {}

const ExpTemp = () => {
  const state = useContext(GlobalContext);
  const experienceState = state["experienceState"]?.allExp;

  return (
    <div className="temp_exp" style={{ paddingLeft: 20 }}>
      <h4 className="temp_head">Employment History</h4>
      <hr className="hr_dashed" />

      {experienceState.map((exp, i) => (
        <div className="temp_exp_inner" key={i}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "60%" }}
          >
            <span className="temp_exp_designation">{exp?.designation}</span>
            <span className="temp_exp_company">{exp?.company}</span>
            <span className="temp_exp_description">{exp?.description}</span>
          </div>

          <span className="temp_exp_year">
            {exp?.startDate} - {exp?.endDate}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ExpTemp;
