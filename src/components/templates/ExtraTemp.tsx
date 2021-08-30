import React, { ReactElement, useContext } from "react";
import { GlobalContext } from "../../context/reducers/provider";

interface Props {}

const ExtraTemp = () => {
  const state = useContext(GlobalContext);
  const extraState = state["extraState"]?.allExtra;
  return (
    <>
      <div className="temp_extra">
        {extraState?.map((extra, i) => (
          <div key={i}>
            <h4 className="temp_extra_title">{extra?.title}</h4>
            <p className="temp_extra_elements">
              {extra?.skill?.map((ele, index) => (
                <span key={index} className="temp_extra_element">
                  • {ele}{" "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExtraTemp;
