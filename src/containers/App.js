import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from "react-router-dom";

import './App.css';

const Home = () => <h1>Home</h1>;
const WillMatch = () => <h1>Matched!</h1>;

const NoMatch = ({ location }) => (
	<div>
		<h3>No match for <code>{ location.pathname }</code></h3>
	</div>
);

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<ul>
	      		<li><Link to="/">Home</Link></li>
	      		<li><Link to="/old-match">Old Match to be redirected</Link></li>
	      		<li><Link to="/will-match">Will Match</Link></li>
	      		<li><Link to="/will-not-match">Will Not Match</Link></li>
	      		<li><Link to="/also/will/not/match">Also will not match</Link></li>
	      	</ul>

	      	<Switch>
		      	<Route path="/" exact component={Home} />
		      	<Redirect from="/old-match" to="/will-match" />
		      	<Route path="/will-match" component={WillMatch} />
		      	<Route component={NoMatch} />
		      </Switch>
	      </div>
	    </Router>
    );
  }
}

export default App;
