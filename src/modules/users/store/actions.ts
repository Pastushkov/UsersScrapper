import { usersTypes } from "./actionTypes";
import { FetchPosts, FetchUsersList } from "./types";

export const fetchUserList = (): FetchUsersList => ({
  type: usersTypes.FETCH_USERS_LIST,
});

export const fetchPosts = (payload: FetchPosts["payload"]): FetchPosts => ({
  type: usersTypes.FETCH_POSTS,
  payload,
});
