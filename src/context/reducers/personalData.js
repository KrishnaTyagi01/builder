import { UPDATE_PERSONAL_DATA } from "./../../constants/actionTypes/index";

const personalData = (state, { type, payload }) => {
  console.log("State: ", state);

  switch (type) {
    case UPDATE_PERSONAL_DATA:
      return {
        ...state,
        name: payload.name,
        email: payload.email,
        designation: payload.designation,
        country: payload.country,
        phoneNumber: payload.phoneNumber,
        cobjective: payload.cobjective,
      };
  }
};

export default personalData;
