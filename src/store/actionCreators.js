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

const getNewsFrom = (source) => ({
    type: ACTIONS.GET_NEWS_FROM,
    payload: {
        source
    }
});

export { addNewsToFavorite, removeNewsFromFavorite, getNewsFrom };
