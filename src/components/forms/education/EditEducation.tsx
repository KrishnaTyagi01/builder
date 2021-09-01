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
import { UPDATE_DRAWER_STATE } from "../../../constants/actionTypes";
import { Education } from "../../../constants/Interfaces";
import { EducationValidation } from "../../../constants/ValidationSchema";
import UpdateData from "../../../helpers/UpdateData";
import { GlobalContext } from "./../../../context/reducers/provider";
import { UPDATE_EDUCATION_STATE } from "./../../../constants/actionTypes/index";
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

  console.log("STATE: ", state["educationState"]);

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={() =>
          UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
            currentDrawer: "reorderEdu",
          })
        }
        startIcon={<KeyboardBackspaceIcon />}
      >
        <span style={{ fontSize: "0.8rem", marginRight: "12px" }}>Back</span>
      </Button>

      <Typography className={classes.heading} variant="h4">
        Add Education
      </Typography>
      <Formik
        initialValues={{
          id: "",
          institution: "",
          major: "",
          startDate: undefined,
          endDate: undefined,
        }}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={false}
        validationSchema={EducationValidation}
        // validator={() => ({})}
        onSubmit={(
          values: Education,
          { setSubmitting }: FormikHelpers<Education>
        ) => {
          console.log("reached here");
          console.log("Values: ", values);

          const finalValues = { ...values, id: randomId() };

          UpdateData(
            state["educationStateDispatch"],
            UPDATE_EDUCATION_STATE,
            finalValues
          );

          UpdateData(state["drawerStateDispatch"], UPDATE_DRAWER_STATE, {
            currentDrawer: "reorderEdu",
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
              id="institution"
              label="Institute Name"
              placeholder="Enter Your Institute Name"
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ margin: 8 }}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.institution}
              error={!!errors.institution}
              helperText={errors.institution}
            />

            <TextField
              id="major"
              placeholder="Your major"
              className={classes.textField}
              label="Major"
              style={{ margin: 8 }}
              margin="normal"
              onBlur={handleBlur}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={values.major}
              error={!!errors.major}
              helperText={errors.major}
            />

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <div style={{ width: "60%", padding: "0 10px" }}>
                <Grid container justify="space-between">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    InputProps={{ readOnly: true }}
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
