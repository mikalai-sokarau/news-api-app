import { createAction, handleActions } from "redux-actions";
import { ACTIONS } from "../common/constants";

const addNewsToFavorite = createAction(ACTIONS.ADD_NEWS_TO_FAVORITE);
const removeNewsFromFavorite = createAction(ACTIONS.REMOVE_NEWS_FROM_FAVORITE);
const recievedNewsFrom = createAction(ACTIONS.RECEIVED_NEWS_FROM);
const getNewsFrom = createAction(ACTIONS.GET_NEWS_FROM);

const INITIAL_STATE = {
  news: [],
  sideNews: [],
  favoriteNews: []
};

const reducer = handleActions(
  {
    [addNewsToFavorite](state, action) {
      const newFavoriteNewsItem = {
        data: action.payload.data,
        id: action.payload.id
      };

      return Object.assign({}, state, {
        favoriteNews: [...state.favoriteNews, newFavoriteNewsItem]
      });
    },
    [removeNewsFromFavorite](state, action) {
      const filteredFavoriteNews = state.favoriteNews.filter(
        item => item.id !== action.id
      );

      return Object.assign(
        { ...state },
        {
          favoriteNews: filteredFavoriteNews
        }
      );
    },
    [recievedNewsFrom](state, action) {
      const key = getNewsConsumer(state, action);
      const result = Object.assign({}, state, { [key]: action.payload.data.articles });
      return result;
    }
  },
  INITIAL_STATE
);

function getNewsConsumer(state, { payload: { consumer } }) {
  const lowerCasedConsumer = consumer.toLowerCase();
  return Object.keys(state).find(
    key => key.toLowerCase() === lowerCasedConsumer
  );
}

export {
  reducer,
  addNewsToFavorite,
  removeNewsFromFavorite,
  getNewsFrom,
  recievedNewsFrom
};
