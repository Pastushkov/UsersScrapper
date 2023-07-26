import { all, fork, AllEffect, ForkEffect } from "redux-saga/effects";
import userSaga from "../../modules/users/store/saga";
import commentsSaga from "../../modules/comments/store/saga";

export function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(userSaga), fork(commentsSaga)]);
}
