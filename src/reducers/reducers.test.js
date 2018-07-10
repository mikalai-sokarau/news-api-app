import { reducer, addNewsToFavorite } from './index';

describe('reducer', () => {
  const INITIAL_STATE = {
    news: [],
    sideNews: [],
    favoriteNews: [],
    images: [],
    favoriteNewsKeys: {}
  };

  test('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('addNewsToFavorite should create an action to add a news to favorite', () => {
    expect(addNewsToFavorite({ data: 'data', id: 'id' })).toEqual({
      payload: { data: 'data', id: 'id' },
      type: 'ADD_NEWS_TO_FAVORITE'
    });
  });

  test('should handle `addNewsToFavorite` call', () => {
    expect(reducer(undefined, addNewsToFavorite({ data: 'data', id: 'id' }))).toEqual({
      news: [],
      sideNews: [],
      favoriteNews: [{ data: 'data', id: 'id' }],
      images: [],
      favoriteNewsKeys: { 'id': true }
    });
  });
});
