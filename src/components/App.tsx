import '../styles/App.css';
import * as React from 'react';

import { Provider } from 'react-redux';
import { store } from '../state';

import LoadDefinitions from './definitions/LoadDefinitions';
import Definitions from './definitions/Definitions';
import Answering from './answering/Answering';
import Header from './header/Header';

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
          <Root>
            <Container
              // sx={{
              //   display: 'flex',
              //   height: '100vh',
              //   alignItems: 'center',
              // }}
            >
              <Grid container rowSpacing={2} columnSpacing={0}>
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
