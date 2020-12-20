import React from 'react';
import './css/index.css';
import './css/reset.css';
import Home from './components/home/Home';
import Item from './components/item/Item';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/item">
          <Item />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
