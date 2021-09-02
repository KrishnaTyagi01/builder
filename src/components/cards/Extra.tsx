import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext, useState } from "react";
import { UPDATE_EXTRA_ORDER } from "../../constants/actionTypes";
import { GlobalContext } from "../../context/reducers/provider";
import UpdateData from "../../helpers/UpdateData";
import "../../styles/eduCard.css";

interface Props {}

const skills = ["react", "node", "js", "cpp"];

const Extra = ({ title, skills, id }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const state = useContext(GlobalContext);
  const extraArray = state["extraState"]?.allExtra;

  const handleDel = (id) => {
    for (let i = 0; i < extraArray.length; i++) {
      if (extraArray[i].id === id) {
        extraArray.splice(i, 1);

        UpdateData(state["extraStateDispatch"], UPDATE_EXTRA_ORDER, extraArray);
      }
    }
  };

  return (
    <div className="eduCard">
      <div className="eduCard_upper" onClick={() => setOpenEdit(!openEdit)}>
        <div className="eduCard_left">
          <span className="eduCard_left_institute">{title}</span>
          <div style={{ display: "flex" }}>
            {skills?.map((skill, i) => (
              <span
                className="eduCard_left_major"
                style={{ marginRight: 10 }}
                key={i}
              >
                • {skill}
              </span>
            ))}
          </div>
        </div>
        <span className="eduCard_year">July 2020 - may 2021</span>
      </div>

      <div
        className="eduCard_lower"
        style={{
          maxHeight: openEdit ? "60px" : "0px",
          transition: "all 0.5s",
          overflow: "hidden",
        }}
      >
        <Button
          style={{ color: "#fff", fontSize: "13px" }}
          startIcon={<DeleteIcon />}
          onClick={() => handleDel(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Extra;
