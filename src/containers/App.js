import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

import './App.css';

const Home = () => <p>Home</p>;
const About = () => <p>About</p>;

/* ------------ NOT SO GOOD WAY OF DOING CUSTOM LINK ------------

	const OldSchoolMenuLink = ({ children, to, exact }) => {
		const match = window.location.pathname === to;

		return(
			<div className={match ? "active" : ""}>
				{match ? ">" : ""}
				<Link to={to}>{children}</Link>
			</div>
		);
	};

-------------------------------------------------------- */
/* ----------------------------------------------------- */
/* ----------------------------------------------------- */


/* Very Tricky way of doing custom links below  */

const OldSchoolMenuLink = ({ children, to, exact }) => {
	return(
		<Route path={to} exact children={({ match }) => (
			<div className={match ? ">" : ""}>
				{match ? ">" : ""}
				<Link to={to}>
					{children}
				</Link>
			</div>
		)} />
	);
};

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<OldSchoolMenuLink exact={true} to="/">
	      		Home
	      	</OldSchoolMenuLink>
	      	<OldSchoolMenuLink to="/about">
	      		About
	      	</OldSchoolMenuLink>

	      	<hr />

	      	<Route path="/" component={Home} />
	      	<Route path="/about" component={About} />
	      </div>
	    </Router>
    );
  }
}

export default App;
