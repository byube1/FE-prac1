import './App.css';
import Home from './page/Home';
import Header from './component/Header';
import ListProduct from './page/ListProduct';
import ManageProduct from './page/ManageProduct';
import DetailProduct from './page/DetailProduct';

import AddCustomer from './page/AddCustomer';
import ManageCustomer from './page/ManageCustomer';
import DetailCustomer from './page/DetailCustomer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [customerList, setCustomerList] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:44322/api/customer')
      .then(res => {
        setCustomerList(res.data); 
      })
      .catch(error => console.log(error));
  });
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listProduct" exact component={ListProduct} />
          <Route path="/manageProduct" exact component={ManageProduct} />
          <Route path="/editProduct" exact component={DetailProduct} />

          <Route path="/addCustomer" exact component={AddCustomer} />
          <Route path="/manageCustomer" exact render={() => <ManageCustomer data={customerList}></ManageCustomer>} />
          <Route path="/editCustomer" exact component={DetailCustomer} />

        </Switch>
      </div>
    </Router>

  );
}

export default App;
