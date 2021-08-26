import React, { ReactElement, useContext } from "react";
// import { useSpring, animated, useTransition } from "react-spring";
import "../../styles/drawer.css";
import { GlobalContext } from "./../../context/reducers/provider";
import { makeStyles, useTheme } from "@material-ui/core/styles";

interface Props {}

const OpenDrawer = ({ children }): ReactElement => {
  // const state = useContext(GlobalContext);
  // const drawerState = state["drawerState"].currentDrawer;

  return <div className="opendrawer">{children}</div>;
};

export default OpenDrawer;
