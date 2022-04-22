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
import Paper from '@mui/material/Paper';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Root>
            <Container>
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
                  <Paper sx={{ 
                    position: 'fixed', 
                    bottom: 0, 
                    left: 0, 
                    right: 0,
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center'
                    }}>
                    <Answering />
                  </Paper>
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
