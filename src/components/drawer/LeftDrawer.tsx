import { Button, Tooltip, Typography } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import clsx from "clsx";
import React, { useState, useContext, useRef } from "react";
import PersonalDataForm from "../forms/PersonalData";
import EditEducation from "./../forms/education/EditEducation";
import EditExp from "./../forms/experience/EditExp";
import EditExtra from "./../forms/skill/EditExtra";
import { GlobalContext } from "./../../context/reducers/provider";
import UpdateData from "./../../helpers/UpdateData";
import { UPDATE_DRAWER_STATE } from "../../constants/actionTypes";
import OpenDrawer from "./OpenDrawer";
import ReorderEducation from "../reorders/ReorderEducation";
import ReorderExperience from "./../reorders/ReorderExperience";
import ReorderExtra from "./../reorders/ReorderExtra";
import Template from "../templates/Template";
import { DragDropContext } from "react-beautiful-dnd";
import Backdrop from "@material-ui/core/Backdrop";
import PrintIcon from "@material-ui/icons/Print";
import { useReactToPrint } from "react-to-print";
import { SportsRugbySharp } from "@material-ui/icons";
import Navbar from "../navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // height: "100vh",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  //
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const sections = [
  {
    label: "Personal Data",
    icon: PersonIcon,
    toggle: "personal",
  },
  {
    label: "Education",
    icon: SchoolIcon,
    toggle: "reorderEdu",
  },
  {
    label: "Work Experience",
    icon: WorkIcon,
    toggle: "reorderExp",
  },
  {
    label: "Extra Information",
    icon: AssignmentIcon,
    toggle: "reorderExtra",
  },
];

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();

  const state = useContext(GlobalContext);
  const drawerState = state["drawerState"].currentDrawer;
  const personalState = state["personalDataState"];

  console.log("Drawer State: ", state["drawerState"]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const leftList = () => {
    if (drawerState === "") {
      return null;
    }
    if (drawerState === "personal") {
      return (
        <OpenDrawer>
          <PersonalDataForm />
        </OpenDrawer>
      );
    } else if (drawerState === "exp") {
      return (
        <OpenDrawer>
          <EditExp />
        </OpenDrawer>
      );
    } else if (drawerState === "edu") {
      return (
        <OpenDrawer>
          <EditEducation />
        </OpenDrawer>
      );
    } else if (drawerState === "extra") {
      return (
        <OpenDrawer>
          <EditExtra />
        </OpenDrawer>
      );
    } else if (drawerState === "reorderEdu") {
      return (
        <OpenDrawer>
          <ReorderEducation />
        </OpenDrawer>
      );
    } else if (drawerState === "reorderExp") {
      return (
        <OpenDrawer>
          <ReorderExperience />
        </OpenDrawer>
      );
    } else if (drawerState === "reorderExtra") {
      return (
        <OpenDrawer>
          <ReorderExtra />
        </OpenDrawer>
      );
    }
  };

  return (
    <>
      <Navbar showCreate={false} />
      <br />
      <br />
      <br />
      <div className={classes.root}>
        {/* {drawerState === "" ? ( */}

        <List
          style={{
            backgroundColor: "#757de8",
            minHeight: "100vh",
            paddingTop: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {sections.map((sec, index) => (
            <ListItem
              button
              key={index}
              style={{
                paddingTop: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tooltip title={sec.label} arrow>
                <Button
                  onClick={() =>
                    UpdateData(
                      state["drawerStateDispatch"],
                      UPDATE_DRAWER_STATE,
                      { currentDrawer: sec.toggle }
                    )
                  }
                >
                  <sec.icon style={{ color: "white" }} />
                </Button>
              </Tooltip>

              {/* <ListItemText primary={text} /> */}
            </ListItem>
          ))}

          <ListItem
            button
            style={{
              paddingTop: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tooltip title="print" arrow>
              <Button onClick={handlePrint}>
                <PrintIcon style={{ color: "white" }} />
              </Button>
            </Tooltip>

            {/* <ListItemText primary={text} /> */}
          </ListItem>
        </List>
        <Drawer variant="permanent" style={{ backgroundColor: "black" }}>
          {leftList()}
        </Drawer>

        <main
          className={classes.content}
          style={{
            display: "flex",
            justifyContent: "center",
            zIndex: -1,
            // marginTop: 20,
            backgroundColor: "rgba(176,176,176, 0.1)",
          }}
        >
          <div className={classes.toolbar} style={{ width: "70%" }}>
            <Template ref={componentRef} personalState={personalState} />
          </div>

          <Backdrop
            className={classes.backdrop}
            open={drawerState === "" ? false : true}
          ></Backdrop>
        </main>

        {/* ) : (
        leftList()
      )} */}
        {/* {drawerState === "" ? null : leftList()} */}
      </div>
    </>
  );
}
