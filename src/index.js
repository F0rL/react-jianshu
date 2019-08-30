import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './css-reset.js'

const Root = () => {
  return (
    <Fragment>
      <App/>
      <GlobalStyle/>
    </Fragment>
  )
};

ReactDOM.render(<Root/>, document.getElementById('root'));
