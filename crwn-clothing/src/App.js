import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
);

const JacketsPage = () => (
  <div>
    <h1>JACKETS Page</h1>
  </div>
);

const SneakersPage = () => (
  <div>
    <h1>SNEAKERS Page</h1>
  </div>
);

const WomensPage = () => (
  <div>
    <h1>WOMENS Page</h1>
  </div>
);

const MensPage = () => (
  <div>
    <h1>MENS Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/hats' component={HatsPage}></Route>
        <Route exact path='/shop/jackets' component={JacketsPage}></Route>
        <Route exact path='/shop/sneakers' component={SneakersPage}></Route>
        <Route exact path='/shop/womens' component={WomensPage}></Route>
        <Route exact path='/shop/mens' component={MensPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
