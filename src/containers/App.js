import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div style={styles.fill}>

	      	<ul style={styles.nav}>
	      		<NavLink to="/hsl/10/90/50">Red</NavLink>
	      		<NavLink to="/hsl/120/100/40">Green</NavLink>
	      		<NavLink to="/rgb/33/150/243">Blue</NavLink>
	      		<NavLink to="/rgb/240/98/146">Pink</NavLink>
	      	</ul>

	      	<div style={styles.content}>
	      		
	      	</div>

	      </div>
	    </Router>
    );
  }
}

const NavLink = (props) => (
	<li style={styles.navItem}>
		<Link {...props} style={{ color: "inherit" }} />
	</li>
);

const styles = {};

styles.fill = {
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
};

styles.content = {
	...styles.fill,
	top: "40px",
	textAlign: "center"
};

styles.nav = {
	padding: 0,
	margin: 0,
	position: "absolute",
	top: 0,
	height: "40px",
	width: "100%",
	display: "flex"
};

styles.navItem = {
	textAlign: "center",
	flex: 1,
	listStyleType: "none",
	padding: "10px"
};

export default App;
