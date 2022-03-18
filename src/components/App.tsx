import '../styles/App.css';
import * as React from 'react';

import { Provider } from 'react-redux';
import { store } from '../state';

import LoadDefinitions from './LoadDefinitions';
import Definitions from './Definitions';
import Answering from './Answering';
import Header from './Header';

import BrandButton from './BrandButtons';

import { ThemeProvider } from '@mui/material';
import theme from '../utils/theme';

import { Box } from '@mui/system';
import { Root } from '../utils/Root';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Root sx={{ m: 1, p: 1 }}>
            <Box>
              <BrandButton color="primary">One</BrandButton>
              <BrandButton color="secondary">Two</BrandButton>
              <Header />
              <LoadDefinitions />
              <Definitions />
              <Answering />
            </Box>
          </Root>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
