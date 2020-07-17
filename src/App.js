import React from 'react';
import './App.css';
import Directory from './components/directory/Directory.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/directory/project/calculator/Calculator.component';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Directory} />
				<Route exact path='/calculator' component={Calculator} />
			</Switch>
		</Router>
	);
}

export default App;
