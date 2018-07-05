import axios from "axios";
import { put, takeEvery, call } from "redux-saga/effects";
import { ACTIONS, API_KEY, IMAGES_API_KEY } from "../common/constants";
import { recievedNewsFrom, recievedImages } from "../reducers";

function* getNewsFrom({ payload: { source: { type, query }, consumer } }) {
  const url = `https://newsapi.org/v2/${type}?${query}&apiKey=${API_KEY}`;
  const news = yield call([axios, axios.get], url);
  const options = {
    consumer,
    data: news.data
  };
  yield put(recievedNewsFrom(options));
}
function* getImages({ payload: { consumer, query = "" } }) {
  const url = `https://pixabay.com/api/?key=${IMAGES_API_KEY}&q=${query}&per_page=9`;
  const images = yield call([axios, axios.get], url);
  const options = {
    consumer,
    data: images.data
  }
  yield put(recievedImages(options));
}

function* rootSaga() {
  yield takeEvery(ACTIONS.GET_NEWS_FROM, getNewsFrom);
  yield takeEvery(ACTIONS.GET_IMAGES, getImages);
}

export { rootSaga };
