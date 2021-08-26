import { UPDATE_EXPERIENCE_STATE } from "./../../constants/actionTypes/index";

const experience = (state, { type, payload }) => {
  // console.log("Payload from state: ", payload);
  console.log("STATE from exp red: ", state);
  // console.log("allExp: ", state?.allExp);
  // const { allExp } = state;
  switch (type) {
    //   case UPDATE_EXPERIENCE_STATE:
    //     return {
    //       ...state,
    //       designation: payload.designation,
    //       company: payload.company,
    //       experience: payload.experience,
    //       description: payload.description,
    //       startDate: payload.startDate,
    //       endDate: payload.endDate,
    //     };
    // }
    case UPDATE_EXPERIENCE_STATE:
      return {
        ...state,
        allExp: [...state.allExp, payload],
      };
  }
};

export default experience;
