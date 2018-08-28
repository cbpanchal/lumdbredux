import React from 'react';
import logo from './logo.svg';
import './App.css';
import MoviesList from './movies/MoviesList';
import MovieDetails from './movies/MovieDetails';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import { applyMiddleware, createStore } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Toggle from './toggle/Toggle';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
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
