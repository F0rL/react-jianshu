import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./store";
import Header from "./common/header";

import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from "./pages/login";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <React.Fragment>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/detail/:id" exact component={Detail} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
