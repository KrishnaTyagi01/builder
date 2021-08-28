import {
  UPDATE_EXTRA_ORDER,
  UPDATE_EXTRA_STATE,
} from "./../../constants/actionTypes/index";

const extra = (state, { type, payload }) => {
  console.log("reached the extra reducer");

  switch (type) {
    //   case UPDATE_EXTRA_STATE:
    //     return {
    //       ...state,
    //       title: payload.title,
    //       skill: payload.skill,
    //     };
    // }
    case UPDATE_EXTRA_STATE:
      return {
        ...state,
        allExtra: [...state.allExtra, payload],
      };

    case UPDATE_EXTRA_ORDER:
      return {
        ...state,
        allExtra: payload,
      };
  }
};

export default extra;
