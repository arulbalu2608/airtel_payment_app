import React, {Component} from 'react';
import Home from './pages/home';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {reducers} from './redux/reducer';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
