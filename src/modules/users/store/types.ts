import { usersTypes } from "./actionTypes";

export interface UsersState {
  list: IUser[];
  isLoading: boolean;
  isError: string;
  posts: IPost[];
}

interface IUser {
  [key: string]: any;
}

export interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export interface FetchUsersList {
  type: typeof usersTypes.FETCH_USERS_LIST;
}

export interface SetUsersList {
  type: typeof usersTypes.SET_USERS_LIST;
  payload: IUser[];
}

export interface ErrorFetchUsersList {
  type: typeof usersTypes.ERROR_FETCH_USERS_LIST;
  payload: string;
}

export interface FetchPosts {
  payload: number | null;
  type: typeof usersTypes.FETCH_POSTS;
}

export interface SetPosts {
  type: typeof usersTypes.SET_POSTS;
  payload: IPost[];
}

export type Users =
  | FetchUsersList
  | SetUsersList
  | ErrorFetchUsersList
  | FetchPosts
  | SetPosts;
