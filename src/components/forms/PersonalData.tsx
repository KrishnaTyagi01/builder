import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SaveIcon from "@material-ui/icons/Save";
import { Formik, FormikHelpers } from "formik";
import React, { useContext } from "react";
import "react-app-polyfill/ie11";
import { PersonalValidation } from "../../constants/ValidationSchema";
import {
  UPDATE_DRAWER_STATE,
  UPDATE_PERSONAL_DATA,
} from "./../../constants/actionTypes/index";
import { PersonalData } from "./../../constants/Interfaces";
import { GlobalContext } from "./../../context/reducers/provider";
import UpdateData from "./../../helpers/UpdateData";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: 30,
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

const PersonalDataForm = () => {
  const classes = useStyles();

  const state = useContext(GlobalContext);
  console.log(state["personalDataDispatch"]);
  // console.log("State: ", state);
  // console.log(state["personalDataState"]);

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
        Personal Data
      </Typography>

      <Formik
        initialValues={{
          name: "",
          email: "",
          designation: "",
          country: "",
          phoneNumber: "",
          cobjective: "",
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={false}
        validationSchema={PersonalValidation}
        onSubmit={(
          values: PersonalData,
          { setSubmitting }: FormikHelpers<PersonalData>
        ) => {
          // await state["personalDataDispatch"]({
          //   type: UPDATE_PERSONAL_DATA,
          //   payload: values,
          // });

          UpdateData(
            state["personalDataDispatch"],
            UPDATE_PERSONAL_DATA,
            values
          );

          UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
            currentDrawer: "",
          });

          // console.log("After Dispatch: ", state["personalDataState"]);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <form
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <TextField
              className={classes.textField}
              id="name"
              label="Name"
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ margin: 8 }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.name}
              error={!!errors.name}
              helperText={errors.name}
            />

            <TextField
              id="email"
              className={classes.textField}
              label="Email"
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              id="designation"
              className={classes.textField}
              label="Designation"
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={!!errors.designation}
              helperText={errors.designation}
            />

            <TextField
              id="cobjective"
              multiline
              rows={3}
              className={classes.textField}
              label="Career Objective"
              style={{ margin: 8 }}
              onBlur={handleBlur}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={!!errors.cobjective}
              helperText={errors.cobjective}
            />

            <TextField
              id="country"
              className={classes.textField}
              label="Country"
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={!!errors.country}
              helperText={errors.country}
            />

            <TextField
              id="phoneNumber"
              className={classes.textField}
              label="Phone no."
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
            />

            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalDataForm;
