import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ListBeer from './components/ListBeer';
import Header from './components/Header';
import Footer from './components/Footer';
import AddBeer from './components/AddBeer';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/allbeers" component={ListBeer}></Route>
            <Route path="/addbeer" component={AddBeer}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
