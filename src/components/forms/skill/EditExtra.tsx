import "date-fns";
import "react-app-polyfill/ie11";
import React, { useContext, useState } from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Button, IconButton, TextField, Typography } from "@material-ui/core";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import ChipsArray from "./ChipArray";
import { styles } from "@material-ui/pickers/views/Calendar/Calendar";
import UpdateData from "../../../helpers/UpdateData";
import { UPDATE_DRAWER_STATE } from "../../../constants/actionTypes";
import { GlobalContext } from "./../../../context/reducers/provider";
import { ExtraValidation } from "../../../constants/ValidationSchema";
import { UPDATE_EXTRA_STATE } from "./../../../constants/actionTypes/index";

interface Values {
  title: string;
  skill: Array<string>;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    // height: "30px",
    width: "90%",
    marginBottom: "30px",
  },
  button: {
    margin: theme.spacing(1),
    width: "100px",
    height: "30px",
    marginTop: 30,
  },
  heading: {
    padding: 10,
    marginBottom: 20,
  },
}));

const EditExp = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillArray, setSkillArray] = useState([]);
  const state = useContext(GlobalContext);

  console.log("STATE: ", state["extraState"]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      console.log("Pressed: ", e.target.value);
      skillArray.push(e.target.value);

      setSkillName("");
    }
  };

  const handleSubmit = async () => {
    console.log("Submit clicked");
    UpdateData(state["extraStateDispatch"], UPDATE_EXTRA_STATE, {
      title: title,
      skill: skillArray,
    });

    UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
      currentDrawer: "",
    });
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={() =>
          UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
            currentDrawer: "",
          })
        }
        startIcon={<KeyboardBackspaceIcon />}
      >
        <span style={{ fontSize: "0.8rem", marginRight: "12px" }}>Back</span>
      </Button>

      <Typography className={classes.heading} variant="h4">
        Add Extra Field
      </Typography>

      <form style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <TextField
          className={classes.textField}
          id="title"
          label="Title"
          placeholder="eg: front-end development"
          onChange={(e) => setTitle(e.target.value)}
          // onChange={handleChange}
          style={{ margin: 8 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={title}
        />

        <TextField
          className={classes.textField}
          // onChange={(e) => handleEnter(e)}
          value={skillName}
          onChange={(e) => {
            setSkillName(e.target.value);
            console.log("skillName: ", skillName);
          }}
          onKeyDown={handleEnter}
          id="skill"
          label="Enter Sub Skills"
          placeholder="Type skill name and hit Enter"
          variant="outlined"
        />

        <ChipsArray skillArray={skillArray} setSkillArray={setSkillArray} />
        <Button
          variant="contained"
          color="primary"
          size="small"
          // type="submit"
          onClick={handleSubmit}
          className={classes.button}
          startIcon={<SaveIcon />}
          // disabled={isSubmitting}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditExp;
