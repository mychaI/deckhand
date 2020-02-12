import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './components/presentation/Navbar';
import Dashboard from './components/containers/Dashboard';
import Login from './components/containers/Login';
import Signup from './components/containers/Signup';

function App() {
  return (
    <Router>
	  <Navbar />
	  <div className="App">
		<Route exact path='/' component={Dashboard} />
		<Route exact path='/login' component={Login} />
		<Route exact path='/signup' component={Signup} />
	  </div>
	</Router>
  );
}

export default App;
