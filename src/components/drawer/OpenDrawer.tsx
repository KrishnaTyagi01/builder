import React, { ReactElement } from "react";
// import { useSpring, animated, useTransition } from "react-spring";
import "../../styles/drawer.css";

interface Props {}

const OpenDrawer = ({ children }): ReactElement => {
  // const state = useContext(GlobalContext);
  // const drawerState = state["drawerState"].currentDrawer;

  return <div className="opendrawer">{children}</div>;
};

export default OpenDrawer;
