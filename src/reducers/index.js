import { createAction, handleActions } from "redux-actions";
import { ACTIONS } from "../common/constants";

const addNewsToFavorite = createAction(ACTIONS.ADD_NEWS_TO_FAVORITE);
const removeNewsFromFavorite = createAction(ACTIONS.REMOVE_NEWS_FROM_FAVORITE);
const recievedNewsFrom = createAction(ACTIONS.RECEIVED_NEWS_FROM);
const getNewsFrom = createAction(ACTIONS.GET_NEWS_FROM);
const getImages = createAction(ACTIONS.GET_IMAGES);
const recievedImages = createAction(ACTIONS.RECIEVED_IMAGES);

const INITIAL_STATE = {
  news: [],
  sideNews: [],
  favoriteNews: [],
  images: [],
  favoriteNewsKeys: {}
};

const reducer = handleActions(
  {
    [addNewsToFavorite]: (state, { payload: { data, id } }) => ({
      ...state,
      favoriteNews: [...state.favoriteNews, { data, id }],
      favoriteNewsKeys: { ...state.favoriteNewsKeys, [id]: true }
    }),

    [removeNewsFromFavorite]: (state, { payload: { id } }) => ({
      ...state,
      favoriteNews: state.favoriteNews.filter(item => item.id !== id),
      favoriteNewsKeys: Object.keys(state.favoriteNews).filter(key => key !== id)
    }),

    [recievedNewsFrom]: (state, { payload: { consumer, data: { articles } } }) => ({
      ...state, 
      [consumer]: articles
    }),

    [recievedImages]: (state, { payload: { consumer, data: { hits } } }) => ({
      ...state,
      [consumer]: hits
    })
  },
  INITIAL_STATE
);

export { 
  reducer,
  addNewsToFavorite,
  removeNewsFromFavorite,
  getNewsFrom,
  recievedNewsFrom,
  getImages,
  recievedImages
};
