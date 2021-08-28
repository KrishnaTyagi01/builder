import {
  UPDATE_EDUCATION_ORDER,
  UPDATE_EDUCATION_STATE,
} from "./../../constants/actionTypes/index";

const education = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_EDUCATION_STATE:
      //  state = {...state, allEdu: [...state.allEdu, payload]}
      //  return localStorage.setItem('educationState: ', JSON.stringify(state.allEdu)

      return {
        ...state,
        allEdu: [...state.allEdu, payload],
      };

    case UPDATE_EDUCATION_ORDER:
      return {
        ...state,
        allEdu: payload,
      };
  }
};

export default education;
