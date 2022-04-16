import logo from './logo.svg';
import './App.css';
import Header from './Component/HeaderComponent';
import HomeComponent from './Component/HomeComponent';
import{Switch, Route} from 'react-router-dom';
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';



function App() {
  return (
  <>
     <Header/>
     <Switch>
       <Route exact path="/" component={HomeComponent}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={ProductDetails}/>
    </Switch>
    </>
  );
}

export default App;
