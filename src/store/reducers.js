import { ACTIONS } from '../common/constants';

const INITIAL_STATE = {
    news: [],
    sideNews: [],
    favoriteNews: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEWS_TO_FAVORITE:
            const newFavoriteNewsItem = {
                data: action.payload.data,
                id: action.payload.id,
            };

            return Object.assign({}, state, {
                favoriteNews: [...state.favoriteNews, newFavoriteNewsItem]
            });

        case ACTIONS.REMOVE_NEWS_FROM_FAVORITE:
            const filteredFavoriteNews = state.favoriteNews
                .filter(item => item.id !== action.id)

            return Object.assign({}, state, {
                favoriteNews: filteredFavoriteNews
            });

        case ACTIONS.RECEIVED_NEWS_FROM:
            const key = getNewsConsumer(state, action);
            return Object.assign({}, state, { [key]: action.payload.data.articles });

        default: return state;
    }
}

function getNewsConsumer(state, action) {
    const lowerCasedConsumer = action.payload.consumer.toLowerCase();
    return Object.keys(state).find(key => key.toLowerCase() === lowerCasedConsumer);
}

export { reducer };
