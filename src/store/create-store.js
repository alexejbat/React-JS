import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { messagesReducer } from "./messages";
import { logger, botSendMessage, crashReporter, timeScheduler } from "./midelwares";
import { getGistsApi, searchGistsByUserNameApi } from "../api";
import { gistsReducer } from "./gists";
import { logger, botSendMessage, crashReporter, timeScheduler } from "./midelwares";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["messages"],
  whitelist: ["profile", "conversations"],
};

const persistreducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
    gists: gistsReducer,
  })
);

export const store = createStore(
  persistreducer,
  compose(
    applyMiddleware(
      timeScheduler,
      crashReporter,
      thunk.withExtraArgument({ getGistsApi, searchGistsByUserNameApi }),
      logger,
      botSendMessage
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export const persistor = persistStore(store);