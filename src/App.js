import './App.css';
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
          <Route path="/listProduct" exact component={ListProduct}/>
          <Route path="/manageProduct" exact component={ManageProduct}/>  
          <Route path="/editProduct" exact component={DetailProduct}/>         
        </Switch>
      </div>
    </Router>

  );
}

export default App;
