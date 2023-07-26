/* eslint-disable import/no-anonymous-default-export */
import { commentsTypes } from "./actionTypes";
import { CommnetsState, Comments } from "./types";

const initialState: CommnetsState = {
  list: [],
  isLoading: false,
};

export default (state = initialState, action: Comments): CommnetsState => {
  switch (action.type) {
    case commentsTypes.FETCH_COMMENTS:
      return {
        ...state,
        isLoading: true,
      };

    case commentsTypes.SET_COMMENTS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
