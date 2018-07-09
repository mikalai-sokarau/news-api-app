import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { recievedNewsFrom } from '../../reducers';
import getNews from './saga';
import { API_KEY } from '../../common/constants';

describe('News saga', () => {
  describe('testing getNews saga', () => {
    const options = {
      payload: {
        source: {
          type: 'top-headlines',
          query: 'sources=cnn'
        },
        consumer: 'news'
      }
    };
    const url = `https://newsapi.org/v2/${options.payload.source.type}?${
      options.payload.source.query
    }&apiKey=${API_KEY}`;
    const generator = getNews(options);
    let receivedData;

    test('should return correct data from news api', () => {
      receivedData = generator.next().value;
      expect(receivedData).toEqual(call([axios, axios.get], url));
    });

    test('should return news array from api', () => {
      expect(generator.next({ data: receivedData }).value).toEqual(
        put(recievedNewsFrom({ consumer: options.payload.consumer, data: receivedData }))
      );
    });

    test('should be finished', () => {
      expect(generator.next().done).toBe(true);
    });
  });
});
