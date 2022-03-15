import React from 'react';
import '../styles/App.css';

import { Provider } from 'react-redux';
import { store } from '../state';

import LoadDefinitions from './LoadDefinitions';
import Definitions from './Definitions';
import Answering from './Answering';
import Header from './Header';
import MediaQuery from './MediaQuery';
// import { Box } from '@mui/system';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
          <Header />
          <MediaQuery />
          <LoadDefinitions />
          <Definitions />
          <Answering />
      </div>
    </Provider>
  );
};

export default App;
