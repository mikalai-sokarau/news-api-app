import { ACTIONS } from '../common/constants';

const addNewsToFavorite = (data, id) => ({
    type: ACTIONS.ADD_NEWS_TO_FAVORITE,
    payload: {
        data,
        id
    }
});

const removeNewsFromFavorite = (id) => ({
    type: ACTIONS.REMOVE_NEWS_FROM_FAVORITE,
    payload: {
        id
    }
});

const getNewsFrom = (options) => ({
    type: ACTIONS.GET_NEWS_FROM,
    payload: { ...options }
});

const recievedNewsFrom = (options) => ({
    type: ACTIONS.RECEIVED_NEWS_FROM,
    payload: { ...options }
})

export { addNewsToFavorite, removeNewsFromFavorite, getNewsFrom, recievedNewsFrom };
