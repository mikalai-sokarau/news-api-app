import { delay } from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

function* helloSaga() {
  yield console.log("Hello Sagas!");
}

function* incrementAsync() {
  yield delay(3000);
  yield console.log("Hello Sagas!");
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

function* rootSaga() {
  yield all([helloSaga, watchIncrementAsync]);
}

export { rootSaga };
