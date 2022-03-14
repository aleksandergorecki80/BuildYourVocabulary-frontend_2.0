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
          <MediaQuery />
          <Header />
          <LoadDefinitions />
          <Definitions />
          <Answering />
          {/* <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
            }}
          > */}
          {/* </Box> */}

      </div>
    </Provider>
  );
};

export default App;
