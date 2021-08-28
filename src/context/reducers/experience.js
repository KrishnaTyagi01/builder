import {
  UPDATE_EXPERIENCE_ORDER,
  UPDATE_EXPERIENCE_STATE,
} from "./../../constants/actionTypes/index";

const experience = (state, { type, payload }) => {
  console.log("STATE from exp red: ", state);

  switch (type) {
    case UPDATE_EXPERIENCE_STATE:
      return {
        ...state,
        allExp: [...state.allExp, payload],
      };

    case UPDATE_EXPERIENCE_ORDER:
      return {
        ...state,
        allExp: payload,
      };
  }
};

export default experience;
