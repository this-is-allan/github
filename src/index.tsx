import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';

import Home from './pages/Home';

import { lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />

      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);