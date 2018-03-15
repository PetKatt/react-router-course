import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter
} from "react-router-dom";

import './App.css';

/* SERVER/DATA BASE WITH LOGINS is outside of the UIs and states*/
const fakeAuth = {
	isAuthenticated: false,
	authenticate(cb) {
		this.isAuthenticated = true;
		setTimeout(cb, 100); //fake async
	},
	signout(cb) {
		this.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

const Public = () => <h3>Public</h3>;
const Protected = (props) => console.log("PROTECTED", props) || <h3>Protected</h3>;

class Login extends Component {
	state = {
		redirectToReferrer: false
	}

	login = () => {
		console.log("LOGIN", this.props);
		fakeAuth.authenticate(() => {
			this.setState(() => ({
				redirectToReferrer: true
			}));
		});
	}

	render() {
		const { redirectToReferrer } = this.state; // NEW SYNTAX!!!
		const { from } = this.props.location.state || { from: { pathname: "/" } };

		if (redirectToReferrer === true) {
			return(
				<Redirect to={ from } />
			);
		}

		return(
			<div>
				<p>You must to log in to view this page at {from.pathname}!</p>
				<button onClick={this.login}>Log in</button>
			</div>
		);
	}
}

const PrivateRoute = ({ component: Component, ...rest}) => {
	return (
		<Route {...rest} render={(props) => {
			return(
				fakeAuth.isAuthenticated === true 
					? <Component {...props} /> 
				/*: <Redirect to="/login" */ 
					: <Redirect to={{
						pathname: "/login",
						state: { from: props.location }
					}} />
			);
		}} />
	);
};

const AuthButton = withRouter(({ history }) => 
	console.log("AuthButton:HISTORY Object", history) || 
	(
		fakeAuth.isAuthenticated === true
			? <p>
					Welcome! <button onClick={() => {
						fakeAuth.signout(() => history.push("/"));
					}}>Sign Out</button>
				</p>
			: <p>You are not logged in.</p>
	)
);

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<AuthButton />
					<ul>
						<li><Link to="/public">Public Page</Link></li>
						<li><Link to="/protected">Protected Page</Link></li>
					</ul>

					<Route path="/public" component={Public} />
					<Route path="/login" component={Login} />
					<PrivateRoute path="/protected" component={Protected} />
	      </div>
	    </Router>
    );
  }
}

export default App;
