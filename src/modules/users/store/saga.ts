import { AxiosResponse } from "axios";
import {
  all,
  call,
  takeLatest,
  AllEffect,
  ForkEffect,
  put,
} from "redux-saga/effects";
import { usersTypes } from "./actionTypes";
import { getPosts, getPostsByUser, getUsersList } from "../api/users.api";
import { FetchPosts } from "./types";

function* fetchUserDataSaga() {
  try {
    const response: AxiosResponse = yield call(getUsersList);
    if (response.data) {
      yield put({
        type: usersTypes.SET_USERS_LIST,
        payload: response?.data,
      });
    }
  } catch (e: any) {
    // error
    yield put({
      type: usersTypes.ERROR_FETCH_USERS_LIST,
      payload: "ERROR while get users list ",
    });
  }
}

function* fetchPosts(payload: FetchPosts) {
  try {
    const id = payload.payload;
    if (!id) {
      const response: AxiosResponse = yield call(getPosts);
      if (response.data) {
        yield put({
          type: usersTypes.SET_POSTS,
          payload: response?.data,
        });
      }
    } else {
      const response: AxiosResponse<{ payload: any }> = yield call(
        getPostsByUser,
        id
      );
      if (response.data) {
        yield put({
          type: usersTypes.SET_POSTS,
          payload: response?.data,
        });
      }
    }
  } catch (e: any) {
    // error
    yield put({
      type: usersTypes.ERROR_FETCH_USERS_LIST,
      payload: "ERROR while get users list ",
    });
  }
}

function* usersSaga(): Generator<AllEffect<ForkEffect<never>>, void, unknown> {
  yield all([
    takeLatest(usersTypes.FETCH_USERS_LIST, fetchUserDataSaga),
    takeLatest(usersTypes.FETCH_POSTS, fetchPosts),
  ]);
}

export default usersSaga;
