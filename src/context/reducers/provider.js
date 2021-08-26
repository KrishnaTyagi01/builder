import React, { createContext, useReducer } from "react";
import drawerInitialState from "../initialStates/drawerInitialState";
import personalDataInitialState from "../initialStates/personalDataInitialState";
import personalData from "./personalData";
import drawerInfo from "./drawerInfo";
import education from "./education";
import educationInitialState from "../initialStates/educationInitialState";
import experience from "./experience";
import experienceInitialState from "../initialStates/experienceInitialState";
import extra from "./extra";
import extraInitialState from "../initialStates/extraInitialState";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [personalDataState, personalDataDispatch] = useReducer(
    personalData,
    personalDataInitialState
  );

  const [drawerState, drawerStateDispatch] = useReducer(
    drawerInfo,
    drawerInitialState
  );

  const [educationState, educationStateDispatch] = useReducer(
    education,
    educationInitialState
  );
  const [experienceState, experienceStateDispatch] = useReducer(
    experience,
    experienceInitialState
  );
  const [extraState, extraStateDispatch] = useReducer(extra, extraInitialState);

  return (
    <GlobalContext.Provider
      value={{
        personalDataState,
        personalDataDispatch,
        drawerState,
        drawerStateDispatch,
        educationState,
        educationStateDispatch,
        experienceState,
        experienceStateDispatch,
        extraState,
        extraStateDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
