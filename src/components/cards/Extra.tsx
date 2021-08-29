import React, { useState } from "react";
import "../../styles/eduCard.css";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {}

const skills = ["react", "node", "js", "cpp"];

const Extra = ({ title, skills }) => {
  const [openEdit, setOpenEdit] = useState(false);

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
          style={{ color: "#fff", fontSize: "13px", marginRight: "10px" }}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          style={{ color: "#fff", fontSize: "13px" }}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Extra;