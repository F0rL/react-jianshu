import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './css-reset.js'
import IconFont from "./statics/iconfont/iconfont";

const Root = () => {
  return (
    <Fragment>
      <App/>
      <GlobalStyle/>
      <IconFont/>
    </Fragment>
  )
};

ReactDOM.render(<Root/>, document.getElementById('root'));
