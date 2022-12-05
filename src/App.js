import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Candies from "./Candies";
import Drinks from "./Drinks";
import Chips from "./Chips";
import NavBar from "./NavBar";
import "./VendingMachine.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />   
        <Route exact path='/'>
          <VendingMachine title="Vending Machine"/>
        </Route>
        <Route exact path="/candies">
          <Candies title="Candies"/>
        </Route>
        <Route exact path="/drinks">
          <Drinks title="Drinks"/>
        </Route>
        <Route exact path="/chips">
          <Chips title="Chips"/>
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default App;
