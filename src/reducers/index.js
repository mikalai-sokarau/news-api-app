import { createAction, handleActions } from "redux-actions";
import { ACTIONS } from "../common/constants";

const addNewsToFavorite = createAction(ACTIONS.ADD_NEWS_TO_FAVORITE);
const removeNewsFromFavorite = createAction(ACTIONS.REMOVE_NEWS_FROM_FAVORITE);
const recievedNewsFrom = createAction(ACTIONS.RECEIVED_NEWS_FROM);
const getNewsFrom = createAction(ACTIONS.GET_NEWS_FROM);

const INITIAL_STATE = {
  news: [],
  sideNews: [],
  favoriteNews: [],
  favoriteNewsKeys: {}
};

const reducer = handleActions(
  {
    [addNewsToFavorite](state, action) {
      const newFavoriteNewsItem = {
        data: action.payload.data,
        id: action.payload.id
      };

      return Object.assign(
        {},
        state,
        {
          favoriteNews: [...state.favoriteNews, newFavoriteNewsItem]
        },
        {
          favoriteNewsKeys: {
            ...state.favoriteNewsKeys,
            [action.payload.id]: true
          }
        }
      );
    },
    [removeNewsFromFavorite](state, action) {
      const filteredFavoriteNews = state.favoriteNews.filter(
        item => item.id !== action.payload.id
      );
      const clonedFilteredFavoriteKeys = Object.assign(
        {},
        state.favoriteNewsKeys
      );

      delete clonedFilteredFavoriteKeys[action.payload.id];

      return Object.assign(
        { ...state },
        {
          favoriteNews: filteredFavoriteNews
        },
        {
          favoriteNewsKeys: clonedFilteredFavoriteKeys
        }
      );
    },
    [recievedNewsFrom](state, action) {
      const consumer = getNewsConsumer(state, action);
      return Object.assign({}, state, {
        [consumer]: action.payload.data.articles
      });
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
