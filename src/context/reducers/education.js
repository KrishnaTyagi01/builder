import { UPDATE_EDUCATION_STATE } from "./../../constants/actionTypes/index";

const education = (state, { type, payload }) => {
  switch (type) {
    //   case UPDATE_EDUCATION_STATE:
    //     return {
    //       ...state,
    //       major: payload.major,
    //       institution: payload.institution,
    //       startDate: payload.startDate,
    //       endDate: payload.endDate,
    //     };
    // }
    case UPDATE_EDUCATION_STATE:
      return {
        ...state,
        allEdu: [...state.allEdu, payload],
      };
  }
};

export default education;
