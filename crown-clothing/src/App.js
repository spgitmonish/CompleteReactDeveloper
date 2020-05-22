import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component'

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
