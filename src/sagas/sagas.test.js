import { takeEvery, all } from 'redux-saga/effects';
import { ACTIONS } from '../common/constants';
import getNews from '../containers/News/saga';
import getImages from '../containers/Images/saga';
import rootSaga from './index';

describe('rootSaga works', () => {
  const generator = rootSaga();

  test('takes all the results', () => {
    expect(generator.next().value).toEqual(
      all([
        takeEvery(ACTIONS.GET_NEWS_FROM, getNews),
        takeEvery(ACTIONS.GET_IMAGES, getImages)
      ])
    );
  });
});
