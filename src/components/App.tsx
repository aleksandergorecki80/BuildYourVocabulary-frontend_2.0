import '../styles/App.css';
import * as React from 'react';

import { Provider } from 'react-redux';
import { store } from '../state';

import LoadDefinitions from './LoadDefinitions';
import Definitions from './Definitions';
import Answering from './Answering';
import Header from './Header';
import { Box } from '@mui/system';

import { Root } from '../utils/Root';



const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Root sx={{ m: 1, p: 1 }}>
          <Box>
            <Header />
            <LoadDefinitions />
            <Definitions />
            <Answering />
          </Box>
        </Root>
      </div>
    </Provider>
  );
};

export default App;
