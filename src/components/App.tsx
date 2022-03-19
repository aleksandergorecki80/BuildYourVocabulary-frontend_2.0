import '../styles/App.css';
import * as React from 'react';

import { Provider } from 'react-redux';
import { store } from '../state';

import LoadDefinitions from './LoadDefinitions';
import Definitions from './Definitions';
import Answering from './Answering';
import Header from './Header';

import { ThemeProvider } from '@mui/material';
import theme from '../utils/theme';
import { Root } from '../utils/Root';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Root sx={{ m: 1, p: 1 }}>
          <Container maxWidth="sm" sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={12}>
                <LoadDefinitions />
              </Grid>
              <Grid item xs={12}>
                <Definitions />
              </Grid>
              <Grid item xs={12}>
                <Answering />
              </Grid>
            </Grid>
            </Container>
          </Root>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
