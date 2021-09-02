import { Container, Grid, Paper } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import React from "react";
import "../../styles/landing.css";
function Middle() {
  return (
    <Container
      className="middle"
      id="middle"
      //   style={{ display: "flex", flexDirection: "center", alignItems: "center" }}
    >
      <h5 className="middle_head">How it Works</h5>
      <h1 className="middle_subHead">
        Creating Resume have never{" "}
        <span className="middle_subHead_inner">been easier</span>
      </h1>

      <Grid container spacing={3} style={{ marginTop: 25 }}>
        <Grid
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper elevation={3} className="middle_steps" id="github_button">
            <ListAltOutlinedIcon
              style={{
                height: 80,
                width: 80,
                color: "#00264d",
                paddingTop: 20,
              }}
            />
            <h1 className="middle_step">STEP 1</h1>

            <span className="middle_stepInfo">
              Easily add all the necessary information in the forms given in the
              the sidebar. You get the options to Add, Update, shuffle order and
              delete all the sections.
            </span>
          </Paper>
        </Grid>
        <Grid
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper elevation={3} className="middle_steps">
            <GetAppIcon
              style={{
                height: 80,
                width: 80,
                color: "#00264d",
                paddingTop: 20,
              }}
            />
            <h1 className="middle_step">STEP 2</h1>

            <span className="middle_stepInfo">
              After filling all the Information, just click on the print button
              to download your resume in PDF format.
            </span>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Middle;
