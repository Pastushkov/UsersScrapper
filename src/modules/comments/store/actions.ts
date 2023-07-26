import { commentsTypes } from "./actionTypes";
import { FetchCommets } from "./types";

export const fetchComments = (
  payload: FetchCommets["payload"]
): FetchCommets => ({
  type: commentsTypes.FETCH_COMMENTS,
  payload,
});
