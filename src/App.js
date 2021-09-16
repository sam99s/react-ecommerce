import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { UIContextProvider } from "./context/UIContext";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout/Checkout";



function App() {



    return (
        <>
            <UIContextProvider>
                <CartProvider>
                    <BrowserRouter>
                    <NavBar/>

                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>
                        <Route exact path="/category/:catId">
                            <ItemListContainer/>
                        </Route>

                        <Route exact path="/detail/:itemId">
                            <ItemDetailContainer/>
                        </Route>

                        <Route exact path="/checkout">
                            <Checkout/>
                        </Route>

                        <Route exact path="/cart">
                            <Cart/>
                        </Route>

                        <Route path="*">
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                    
                </BrowserRouter>
                </CartProvider>
            </UIContextProvider>
        </>
      
    );
}

export default App;
