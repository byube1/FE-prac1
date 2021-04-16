import './App.css';
import Home from './page/Home';
import Header from './component/Header';
import ListProduct from './page/ListProduct';
import ManageProduct from './page/ManageProduct';
import DetailProduct from './page/DetailProduct';

import AddCustomer from './page/AddCustomer';
import AddProduct from './page/AddProduct';
import ManageCustomer from './page/ManageCustomer';
import DetailCustomer from './page/DetailCustomer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import CardProduct from './component/CardProduct';
import ShoppingCart from './component/ShoppingCart';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/addProduct" exact component={AddProduct} />
          <Route path="/listProduct" exact component={ListProduct} />
          <Route path="/manageProduct" exact component={ManageProduct} />
          <Route path="/editProduct" exact component={DetailProduct} />
          <Route path="/shoppingCart" exact component={ShoppingCart} />

          <Route path="/addCustomer" exact component={AddCustomer} />
          <Route path="/manageCustomer" exact component={ManageCustomer} />
          <Route path="/editCustomer" exact component={DetailCustomer} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
