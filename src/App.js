import React from 'react';
import './App.css';
import Home from './pages/Home';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {Reset} from 'styled-reset';

/* eslint-disable */
function App() {
    return (
      <ThemeProvider theme={theme}>
          <Reset/>
          <Home/>
      </ThemeProvider>
    );
}

export default App;
