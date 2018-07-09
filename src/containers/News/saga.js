import axios from "axios";
import { put, call } from "redux-saga/effects";
import { API_KEY } from "../../common/constants";
import { recievedNewsFrom } from "../../reducers";

export function* getNewsFrom({ payload: { source: { type, query }, consumer } }) {
  const url = `https://newsapi.org/v2/${type}?${query}&apiKey=${API_KEY}`;
  const news = yield call([axios, axios.get], url);
  const options = {
    consumer,
    data: news.data
  };
  yield put(recievedNewsFrom(options));
}

export default getNewsFrom;
