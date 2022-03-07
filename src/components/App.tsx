import React from 'react';
import './App.css';


import { Provider } from 'react-redux';
import { store } from '../state';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">Build Your Vocabulary</div>
    </Provider>
  );
};

export default App;
