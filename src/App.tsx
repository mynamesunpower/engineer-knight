import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/pages/Main';
import Login from './components/pages/Login';
import TopNav from './components/UI/molecules/TopNav';
import Register from './components/pages/Register';
import Quiz from './components/pages/Quiz';
import GlobalStyles from './assets/styles/global-styles';
import { theme } from './assets/styles/themes';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TopNav />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/quiz/:number' component={Quiz} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
