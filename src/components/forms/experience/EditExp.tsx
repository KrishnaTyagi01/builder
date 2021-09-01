import DateFnsUtils from "@date-io/date-fns";
import { Button, TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SaveIcon from "@material-ui/icons/Save";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import "date-fns";
import { Formik, FormikHelpers } from "formik";
import React, { useContext } from "react";
import "react-app-polyfill/ie11";
import {
  UPDATE_DRAWER_STATE,
  UPDATE_EXPERIENCE_STATE,
} from "../../../constants/actionTypes";
import { Experience } from "../../../constants/Interfaces";
import { ExperienceValidation } from "../../../constants/ValidationSchema";
import UpdateData from "../../../helpers/UpdateData";
import { GlobalContext } from "./../../../context/reducers/provider";
import { randomId } from "./../../../helpers/randomId";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginLeft: "1.8rem",
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
  const state = useContext(GlobalContext);
  console.log("STATE: ", state["experienceState"]);
  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={() =>
          UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
            currentDrawer: "reorderExp",
          })
        }
        startIcon={<KeyboardBackspaceIcon />}
      >
        <span style={{ fontSize: "0.8rem", marginRight: "12px" }}>Back</span>
      </Button>
      <Typography className={classes.heading} variant="h4">
        Add Experience
      </Typography>
      <Formik
        initialValues={{
          id: "",
          designation: "",
          company: "",
          experience: "",
          description: "",
          startDate: undefined,
          endDate: undefined,
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={false}
        validationSchema={ExperienceValidation}
        // validator={() => ({})}
        onSubmit={(
          values: Experience,
          { setSubmitting }: FormikHelpers<Experience>
        ) => {
          console.log("reached here");
          console.log("Values: ", values);

          const finalValues = { ...values, id: randomId() };

          UpdateData(
            state["experienceStateDispatch"],
            UPDATE_EXPERIENCE_STATE,
            finalValues
          );

          UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
            currentDrawer: "reorderExp",
          });

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
              id="designation"
              label="Designation"
              placeholder="Enter Designation"
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ margin: 8 }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.designation}
              error={!!errors.designation}
              helperText={errors.designation}
            />

            <TextField
              id="company"
              placeholder="Enter Company Name"
              className={classes.textField}
              label="Company"
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.company}
              error={!!errors.company}
              helperText={errors.company}
            />

            <TextField
              id="description"
              className={classes.textField}
              label="Description"
              multiline
              rows={3}
              placeholder="Explain your experience in short"
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.description}
              error={!!errors.description}
              helperText={errors.description}
            />

            <TextField
              id="experience"
              className={classes.textField}
              label="Years of Experience"
              placeholder="1"
              style={{ margin: 8 }}
              onBlur={handleBlur}
              onChange={handleChange}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={!!errors.experience}
              value={values.experience}
              helperText={errors.experience}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div style={{ width: "60%", padding: "0 10px" }}>
                <Grid container justify="space-between">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    InputProps={{ readOnly: true }}
                    // format="MM/dd/yyyy"
                    margin="normal"
                    id="startDate"
                    label="Start Date"
                    value={values.startDate}
                    views={["year", "month"]}
                    onChange={(date) => {
                      const month = date.toLocaleString("default", {
                        month: "long",
                      });
                      const year = date.getUTCFullYear();
                      setFieldValue(`startDate`, `${month} ${year}`);
                    }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    error={!!errors.startDate}
                    helperText={errors.startDate}
                  />
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    // format="MM/dd/yyyy"
                    margin="normal"
                    id="endDate"
                    label="End Date"
                    views={["year", "month"]}
                    value={values.endDate}
                    InputProps={{ readOnly: true }}
                    onChange={(date) => {
                      const month = date.toLocaleString("default", {
                        month: "long",
                      });
                      const year = date.getUTCFullYear();
                      setFieldValue(`endDate`, `${month} ${year}`);
                    }}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                    error={!!errors.endDate}
                    helperText={errors.endDate}
                  />
                </Grid>
              </div>
            </MuiPickersUtilsProvider>

            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              className={classes.button}
              startIcon={<SaveIcon />}
              disabled={isSubmitting}
            >
              Save
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default EditExp;
