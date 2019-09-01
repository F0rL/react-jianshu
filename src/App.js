import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom'
import store from "./store";
import Header from "./common/header";

import Home from './pages/home'
import Detail from './pages/detail'

const App = () => {
  return (
    <Provider store={store}>
      <div>
      <Header />
      <BrowserRouter>
      <div>
        <Route path='/' exact component={Home} />
        <Route path='/detail' exact component={Detail} />
      </div>
      </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
