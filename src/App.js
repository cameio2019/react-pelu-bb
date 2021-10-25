import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import Cart from "./components/Cart/Cart";
import Footer from './components/Footer/Footer'
import  CartContextProvider  from "./components/Context/cartContext"


function App() {
  return (

  <CartContextProvider>
    <BrowserRouter>
        <div className= "App">
          <NavBar /> 
            <Switch> 
                <Route  exact path= '/' >
                  <ItemListContainer  /> 
                </Route>
                
                <Route  path= '/categoria/:idCategoria' component= {ItemListContainer} />
                
                <Route exact path= '/item/:id'><ItemDetailContainer />
                
                </Route>
                <Route exact path= '/cart'>
                  <Cart />
                </Route>
          </Switch>

          <Footer /> 
        </div>
    </BrowserRouter>
  </CartContextProvider>

  );
}

export default App;