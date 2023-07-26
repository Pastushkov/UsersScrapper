/* eslint-disable import/no-anonymous-default-export */
import { usersTypes } from "./actionTypes";
import { UsersState, Users } from "./types";

const initialState: UsersState = {
  list: [],
  isLoading: false,
  isError: "",
  posts: []
};

export default (state = initialState, action: Users): UsersState => {
  switch (action.type) {
    case usersTypes.FETCH_USERS_LIST:
      return {
        ...state,
        isLoading: true,
        isError: "",
      };
    case usersTypes.SET_USERS_LIST:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case usersTypes.ERROR_FETCH_USERS_LIST:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };

      case usersTypes.FETCH_POSTS:
        return {
          ...state,
          isLoading: true,
        };


    case usersTypes.SET_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      };

    default:
      return {
        ...state,
      };
  }
};
