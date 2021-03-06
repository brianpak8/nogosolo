import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignupPage from './SignupPage';
import SearchPage from './SearchPage';
import MatchPage from './MatchPage';
import EventPage from './EventPage';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignupPage} />
      <Route
        path="/search"
        render={() => (<SearchPage
          eventSearchClick={props.eventSearchClick}
          searchQuery={props.searchQuery}
        />)}
      />
      <Route path="/match" render={() => <MatchPage userId={props.userdata.userid} />} />
      <Route path="/event" render={() => <EventPage
        userId={props.userdata.userid}
        event={props.selectedEvent}
      />
    }
      />
    </Switch>
  </main>
);

export default Main;
