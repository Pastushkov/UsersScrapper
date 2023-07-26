import { AxiosResponse } from "axios";
import {
  all,
  call,
  takeLatest,
  AllEffect,
  ForkEffect,
  put,
} from "redux-saga/effects";
import { commentsTypes } from "./actionTypes";
import { getCommentsByPost } from "../api/comments.api";
import { FetchCommets } from "./types";

function* fetchComments(payload: FetchCommets) {
  try {
    const id = payload.payload;

    const response: AxiosResponse<{ payload: any }> = yield call(
      getCommentsByPost,
      id
    );
    if (response.data) {
      yield put({
        type: commentsTypes.SET_COMMENTS,
        payload: response?.data,
      });
    }
  } catch (e: any) {
    // error
    console.log(e);
  }
}

function* commentsSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeLatest(commentsTypes.FETCH_COMMENTS, fetchComments)]);
}

export default commentsSaga;
