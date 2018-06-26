import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { ACTIONS, API_KEY } from "../common/constants";
import { recievedNewsFrom } from "../reducers";

function* getNewsFrom({ payload: p }) {
  const url = composeUrl(p.source.type, p.source.query);
  const news = yield call([axios, axios.get], url);
  const options = {
    consumer: p.consumer,
    data: news.data
  };
  yield put(recievedNewsFrom(options));
}

function composeUrl(type, query) {
  return `https://newsapi.org/v2/${type}?${query}&apiKey=${API_KEY}`;
}

function* rootSaga() {
  yield takeEvery(ACTIONS.GET_NEWS_FROM, getNewsFrom);
}

export { rootSaga };

