import { commentsTypes } from "./actionTypes";

export interface CommnetsState {
  list: IComment[];
  isLoading: boolean;
}

interface IComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface FetchCommets {
  payload: string;
  type: typeof commentsTypes.FETCH_COMMENTS;
}

export interface SetComments {
  type: typeof commentsTypes.SET_COMMENTS;
  payload: IComment[];
}

export type Comments = FetchCommets | SetComments;
