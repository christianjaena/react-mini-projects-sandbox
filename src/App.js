import React from 'react';
import './App.css';
import Directory from './components/directory/Directory.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './components/directory/project/calculator/Calculator.component';
import Countdown from './components/directory/project/countdown/Countdown.component';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Directory} />
				<Route exact path='/calculator' component={Calculator} />
				<Route exact path='/countdown' component={Countdown} />
			</Switch>
		</Router>
	);
}

export default App;
