import { UPDATE_DRAWER_STATE } from "./../../constants/actionTypes/index";

const personalData = (state, { type, payload }) => {
  console.log("State: ", state);

  switch (type) {
    case UPDATE_DRAWER_STATE:
      return {
        ...state,
        currentDrawer: payload.currentDrawer,
      };
  }
};

export default personalData;
