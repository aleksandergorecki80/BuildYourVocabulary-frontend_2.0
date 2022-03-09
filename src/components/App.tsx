import React from 'react';
import '../styles/App.css';

import { Provider } from 'react-redux';
import { store } from '../state';

import LoadDefinitions from './LoadDefinitions';
import Definitions from './Definitions';
import Answering from './Answering';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Build Your Vocabulary</h3>
        <LoadDefinitions />
        <Definitions />
        <Answering />
      </div>
    </Provider>
  );
};

export default App;
