import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

import './App.css';

const users = [
	{ id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
];

const find = (id) => users.find((u) => u.id === id);

const Person = ({ match }) => {
	const person = find(Number(match.params.id));

	return (
		<div>
			<h3>{person.name}'s Friends</h3>
			<ul>
				{person.friends.map((p) => (
					<li key={p}><Link to={`${match.url}/${p}`}>{find(p).name}</Link></li>
				))}
			</ul>

			<Route path={`${match.url}/:id`} component={Person} />
		</div>
	);
};

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	  			<Person match={{ params: {id: 0}, url: "" }} />
	      </div>
	    </Router>
    );
  }
}

export default App;
