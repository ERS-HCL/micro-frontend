import React from 'react';
import About from './About';
import AppHeader from './AppHeader';
import MicroFrontend from './MicroFrontend';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const {
  REACT_APP_MOVIES_HOST: moviesHost,
  REACT_APP_MUSIC_HOST: musicHost,
  REACT_APP_SPORTS_HOST: sportsHost,
  REACT_APP_NEWS_HOST: newsHost,
  REACT_APP_PLAYER_HOST: playerHost,
} = process.env;

const Movies = ({ history }) => (
  <MicroFrontend history={history} host={moviesHost} name="Movies" />
);

const Music = () => (
  <MicroFrontend host={musicHost} name="Music" />
);

const Sports = () => (
  <MicroFrontend host={sportsHost} name="Sports" />
);

const News = () => (
  <MicroFrontend host={newsHost} name="News" />
);

const Player = ({ history }) => (
  <MicroFrontend history={history} host={playerHost} name="Player" />
);

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <AppHeader />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/sports" component={Sports} />
        <Route exact path="/news" component={News} />
        <Route exact path="/about" render={About} />
        <Route path="/media/:url" component={Player} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
