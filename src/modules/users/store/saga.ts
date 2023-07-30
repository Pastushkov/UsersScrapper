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
import { getPosts, getUsersList } from "../api/users.api";
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
  } catch (e) {
    // error
    console.log(e);
    
    yield put({
      type: usersTypes.SET_USERS_LIST,
      payload: [],
    });
  }
}

function* fetchPosts({ payload }: FetchPosts) {
  try {
    const response: AxiosResponse = yield call(getPosts, payload);
    if (response.data) {
      yield put({
        type: usersTypes.SET_POSTS,
        payload: response?.data,
      });
    }
  } catch (e) {
    // error
    console.log(e);
    yield put({
      type: usersTypes.SET_POSTS,
      payload: [],
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
