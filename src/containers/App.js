import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import './App.css';

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
);

const About = () => (
	<div>
		<h2>About</h2>
	</div>
);

const Topics = ({ match }) => (
	<div>
		<h2>Topics</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v. State</Link>
			</li>
		</ul>

		<Route path="/topics/:topicID" component={Topic} />
	</div>
);

const Topic = ({match}) => (
	<h3>{match.params.topicID}</h3>
);

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	        <ul>
	        	<li><Link to="/">Home</Link></li>
	        	<li><Link to="/about">About</Link></li>
	        	<li><Link to="/topics">Topics</Link></li>
	        </ul>

	        <hr />

	        <Route exact path="/" component={Home} />
	        <Route path="/about" component={About} />
	        <Route path="/topics" component={Topics} />
	        <Route exact path="/topics" render={() => (
	        	<p>Please choose a topic above</p>
	        )} />
	      </div>
	    </Router>
    );
  }
}

export default App;
