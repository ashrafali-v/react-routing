import React from 'react';
import './App.css';
import Films from './components/films';
import Users from './components/users';
import Navbar from './components/navbar';
import Profile from './components/profile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/users" exact component={Users} />
          <Route path="/users/:id" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

export default App;
