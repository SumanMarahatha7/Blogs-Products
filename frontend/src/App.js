import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Products from './Components/Products';
import DetailProducts from './Components/DetailProducts';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/products" exact component={Products} />
    <Route path="/products/:id" exact component={DetailProducts} />
    </Switch>
    </div>
  );
}

export default App;
