import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { IMAGES_API_KEY } from '../../common/constants';
import { recievedImages } from '../../reducers';

function* getImages({ payload: { consumer, query } }) {
  const url = `https://pixabay.com/api/?key=${IMAGES_API_KEY}&q=${query}&per_page=9`;
  const images = yield call([axios, axios.get], url);
  yield put(recievedImages({ consumer, data: images.data }));
}

export default getImages;
