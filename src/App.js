import './App.css';
import React from 'react';
import Home from './page/Home';
import Header from './component/Header';
import ListProduct from './page/ListProduct';
import ManageProduct from './page/ManageProduct';
import DetailProduct from './page/DetailProduct';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>    
          <Route path="/listProduct"  component={ListProduct}/>
          <Route path="/manageProduct"  component={ManageProduct}/>  
          <Route path={["/editProduct","/addProduct"]}  component={DetailProduct}/>         
        </Switch>
      </div>
    </Router>

  );
}

export default App;
