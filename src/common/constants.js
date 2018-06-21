const API_KEY = "96be30eda92847a2b5edd3f3a907e3bd";

const ACTIONS = {
  ADD_NEWS_TO_FAVORITE: "ADD_NEWS_TO_FAVORITE",
  REMOVE_NEWS_FROM_FAVORITE: "REMOVE_NEWS_FROM_FAVORITE",
  GET_NEWS_FROM: "GET_NEWS_FROM",
  RECEIVED_NEWS_FROM: "RECEIVED_NEWS_FROM"
};

const NEWS_SOURCES = [
  {
    name: "CNN",
    type: "top-headlines",
    query: "sources=cnn"
  },
  {
    name: "The New York Times",
    type: "top-headlines",
    query: "sources=the-new-york-times"
  },
  {
    name: "Daily Mail",
    type: "top-headlines",
    query: "sources=daily-mail"
  },
  {
    name: "ESPN",
    type: "top-headlines",
    query: "sources=espn"
  },
];

const ASIDE_NEWS_SOURCES = {
  name: "Google News",
  type: "top-headlines",
  query: "sources=google-news"
}

export { API_KEY, ACTIONS, NEWS_SOURCES, ASIDE_NEWS_SOURCES };
