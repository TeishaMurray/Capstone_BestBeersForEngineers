import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ListBeer from './components/ListBeer';
// import Header from './components/Header';
import Footer from './components/Footer';
import AddBeer from './components/AddBeer';
import UpdateBeer from './components/UpdateBeer';
import ViewBeer from './components/ViewBeer';
import DeleteBeer from './components/DeleteBeer';
import BeerByType from './components/BeerByType';


function App() {
  return (
    <div>
      <div className="screen">
      <Router>
        {/* <Header /> */}
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/allbeers" component={ListBeer}></Route>
            <Route path="/beers" component={ListBeer}></Route>
            <Route path="/addbeer" component={AddBeer}></Route>
            <Route path="/update-beer/:id" component={UpdateBeer}></Route>
            <Route path="/view-beer/:id" component={ViewBeer}></Route>
            <Route path="/delete-beer/:id" component={DeleteBeer}></Route> 
            <Route path="/beer-by-type/" component={BeerByType}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
      </div>
    </div>
  );
}

export default App;
