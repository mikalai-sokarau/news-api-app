import axios from 'axios';
import { put, takeEvery, call } from "redux-saga/effects";
import { ACTIONS, API_KEY } from '../common/constants';
import { recievedNewsFrom } from "./actionCreators";

function* getNewsFrom(action) {
  const url = composeUrl(action.payload.source.type, action.payload.source.query);
  const news = yield call([axios, axios.get], url);
  const options = {
    consumer: action.payload.consumer,
    data: news.data
  }
  yield put(recievedNewsFrom(options));
}

function composeUrl(type, query) {
  return `https://newsapi.org/v2/${type}?${query}&apiKey=${API_KEY}`;
}

function* rootSaga() {
  yield takeEvery(ACTIONS.GET_NEWS_FROM, getNewsFrom);
}

export { rootSaga };
