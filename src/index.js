import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { createTheme } from "@mui/material";
import { CustomThemeProvider } from "./contexts";
import React from "react";
import { ChatPage } from "./pages";
import { store } from "./store";
import "./global.css";

const themes = {
  light: createTheme({
    theme: {
      color: "#17212b",
    },
  }),
  dark: createTheme({
    theme: {
      color: "blue",
    },
  }),
};

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CustomThemeProvider themes={themes} initialTheme="light">
          <Switch>
            <Route path="/chat">
              <ChatPage />
            </Route>

            <Route path="*">
              <h1>404</h1>
              <Link to="/chat">go to Chat</Link>
            </Route>
          </Switch>
        </CustomThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
