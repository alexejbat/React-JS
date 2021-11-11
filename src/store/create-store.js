import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { messagesReducer } from "./messages";
import { logger, botSendMessage, crashReporter, timeScheduler } from "./midelwares";
import { getGistsApi, searchGistsByUserNameApi, getMessagesApi, senMessageApi, getConversationsApi } from "../api";
import { gistsReducer } from "./gists";
import { logger, botSendMessage, crashReporter, timeScheduler } from "./midelwares";
import { sessionReducer } from "./session";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile", "conversations"],
};

export const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
  session: sessionReducer,
});

const persistreducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistreducer,
  composeEnhancers(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      thunk.withExtraArgument({
        getGistsApi,
        searchGistsByUserNameApi,
        getMessagesApi,
        senMessageApi,
        getConversationsApi,
      }),
      logger,
      botSendMessage
    )
  )
);

export const persistor = persistStore(store);