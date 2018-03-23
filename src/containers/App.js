import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";

import './App.css';

const Sandwiches = () => <h2>Sandwiches</h2>;
const Tacos = ({ routes }) => (
	<div>
		<h2>Tacos</h2>
		<ul>
			{routes.map(({ path, name }) => (
				<li key={path}><Link to={path}>{name}</Link></li>
			))}
		</ul>

		{routes.map((route) => (
			<RouteWithSubRoutes key={route.path} route={route} />
		))}
	</div>
	
);

const Bus = () => <h2>Bus</h2>;
const Cart = () => <h2>Cart</h2>;

//routes.js
const routes = [
	{
		path: "/sandwiches",
		component: Sandwiches
	},
	{
		path: "/tacos",
		component: Tacos,
		routes: [
			{
				name: "Bus",
				path: "/tacos/bus",
				component: Bus
			},
			{
				name: "Cart",
				path: "/tacos/cart",
				component: Cart
			}
		]
	}
];

const RouteWithSubRoutes = ({ route }) => (
	<Route 
		path={route.path}
		render={(props) => (
			<route.component {...props} routes={route.routes} />
		)}
	/>
); 

class App extends Component {
  render() {
    return (
    	<Router>
    		<div>
    			<ul>
    				<li><Link to="/tacos">Tacos</Link></li>
    				<li><Link to="/sandwiches">Sandwiches</Link></li>
    			</ul>

    			{routes.map((route) => (
    				<RouteWithSubRoutes key={route.path} route={route} />
    				
    				/*<Route 
    					key={route.path}  
    					path={route.path} 
    					component={route.component}
    				/>*/
    			))}
    		</div>
    	</Router>
    );
  }
}

export default App;
