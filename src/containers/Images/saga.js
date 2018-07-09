import axios from 'axios';
import { put, call } from 'redux-saga/effects';
import { IMAGES_API_KEY } from '../../common/constants';
import { recievedImages } from '../../reducers';

export function* getImages({ payload: { consumer, query } }) {
  const url = `https://pixabay.com/api/?key=${IMAGES_API_KEY}&q=${query}&per_page=9`;
  const images = yield call([axios, axios.get], url);
  const options = {
    consumer,
    data: images.data
  };
  yield put(recievedImages(options));
}

export default getImages;
