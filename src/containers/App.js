import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Prompt
} from "react-router-dom";

import './App.css';

class Form extends Component {
	state = {
		isBlocking: false
	}

	render() {
		const { isBlocking } = this.state;

		return (
			<form onSubmit={(event) => {
				event.preventDefault();
				event.target.reset();
				this.setState(() => ({
					isBlocking: false
				}))
			}}>
				FORM
				<Prompt
					when={isBlocking}
					message={(location) => `Are you sure you want to go to ${location.pathname}?`}
				/>

				<p>
					Blocking?
					{isBlocking === true
						? "Yes, click a link or the back button."
						: "Nope."
					}
				</p>

				<p>
					<input
						size="50"
						placeholder="type something to block transition"
						onChange={(event) => {
							const isBlocking = event.target.value.length > 0;
							this.setState(() => ({
								isBlocking
							}));
						}}
					/>
				</p>

				<p>
					<button>
						Submit to stop blocking
					</button>
				</p>




			</form>
		);
	}
}

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	      	<ul>
	      		<li><Link to="/">Form</Link></li>
	      		<li><Link to="/one">One</Link></li>
	      		<li><Link to="/two">Two</Link></li>
	      	</ul>

	      	<Route path="/" exact component={Form} />
	      	<Route path="/one" render={() => <h3>One</h3>} />
	      	<Route path="/two" render={() => <h3>Two</h3>} />
	      </div>
	    </Router>
    );
  }
}

export default App;
