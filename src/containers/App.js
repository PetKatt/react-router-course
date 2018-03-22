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
	      	
	      </div>
	    </Router>
    );
  }
}

export default App;
