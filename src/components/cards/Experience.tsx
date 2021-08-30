import React, { useContext, useState } from "react";
import "../../styles/eduCard.css";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { GlobalContext } from "../../context/reducers/provider";
import UpdateData from "../../helpers/UpdateData";
import { UPDATE_EXPERIENCE_ORDER } from "../../constants/actionTypes";

interface Props {}

const Education = ({
  id,
  designation,
  company,
  description,
  startDate,
  endDate,
}) => {
  const [openEdit, setOpenEdit] = useState(false);

  const state = useContext(GlobalContext);
  const expArray = state["experienceState"]?.allExp;

  const handleDel = (id) => {
    for (let i = 0; i < expArray.length; i++) {
      if (expArray[i].id === id) {
        expArray.splice(i, 1);

        UpdateData(
          state["experienceStateDispatch"],
          UPDATE_EXPERIENCE_ORDER,
          expArray
        );
      }
    }
  };
  return (
    <div className="eduCard">
      <div className="eduCard_upper" onClick={() => setOpenEdit(!openEdit)}>
        <div className="eduCard_left">
          <span className="eduCard_left_institute">{designation}</span>
          <span className="eduCard_left_major">• {company}</span>
        </div>
        <span className="eduCard_year">
          {startDate} - {endDate}
        </span>
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

export default Education;
