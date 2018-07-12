import { takeEvery, all } from 'redux-saga/effects';
import { ACTIONS } from '../common/constants';
import getNews from '../containers/News/saga';
import getImages from '../containers/Images/saga';

function* rootSaga() {
  yield all([
    takeEvery(ACTIONS.GET_NEWS_FROM, getNews),
    takeEvery(ACTIONS.GET_IMAGES, getImages)
  ]);
}

export default rootSaga; 
