import { ACTIONS, INITIAL_STATE } from '../common/constants';

const reducer = (state = INITIAL_STATE, action) => {
    let result;

    switch (action.type) {
        case ACTIONS.ADD_NEWS_TO_FAVORITE:
            const newFavoriteNewsItem = {
                data: action.payload.data,
                id: action.payload.id,
                isFavorite: true
            };

            result = Object.assign({}, ...state, {
                favoriteNews: [...state.favoriteNews, newFavoriteNewsItem]
            });
            break;

        case ACTIONS.REMOVE_NEWS_FROM_FAVORITE:
            const filteredFavoriteNews = state.favoriteNews
                .filter(item => item.id !== action.id)

            result = Object.assign({}, ...state, {
                favoriteNews: filteredFavoriteNews
            });
            break;

        case ACTIONS.GET_NEWS_FROM:
            break;

        default: result = state;
    }

    console.log(result);
    return result;
}

export { reducer };
