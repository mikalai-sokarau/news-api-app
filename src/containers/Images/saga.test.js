import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { recievedImages } from '../../reducers';
import getImages from './saga';
import { IMAGES_API_KEY } from '../../common/constants';

describe('Images saga', () => {
  describe('testing getImages saga', () => {
    const options = {
      payload: {
        query: 'green',
        consumer: 'images'
      }
    };
    const url = `https://pixabay.com/api/?key=${IMAGES_API_KEY}&q=${
      options.payload.query
    }&per_page=9`;
    const generator = getImages(options);
    let receivedData;

    test('should return correct data from images api', () => {
      receivedData = generator.next().value;
      expect(receivedData).toEqual(call([axios, axios.get], url));
    });

    test('should return images array from api', () => {
      expect(generator.next({ data: receivedData }).value).toEqual(
        put(
          recievedImages({ consumer: options.payload.consumer, data: receivedData })
        )
      );
    });

    test('should be finished', () => {
      expect(generator.next().done).toBe(true);
    });
  });
});
