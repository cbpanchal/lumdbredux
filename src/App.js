import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './MoviesList';
import MovieDetails from './MovieDetails';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import Toggle from './Toggle';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const middleware = [logger];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware)),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetails} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
