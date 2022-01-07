import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./components/loginPage";
import MainPage from "./screens/MainScreen";
import ProductDetail from "./screens/productDetailScreen";
import Cart from "./screens/cartScreen";
import PlaceOrder from "./screens/PlaceorderScreen";
import UserDetails from "./screens/userdetailsScreen";
import NotFound from "./components/Notfound";
import Footer from "./components/footer";
import { useSelector } from "react-redux";


function App() {

  const Products = useSelector((state) => state.Products.products);
  const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          {isAuthenticated ? <Route path="/products" exact component={MainPage} exact /> : <Redirect to={"/"} />}
          {isAuthenticated ? <Route path="/product/:productId" component={ProductDetail} exact /> : <Redirect to={'/'} />}
          {isAuthenticated ? <Route path="/cart" component={Cart} exact /> : <Redirect to={'/'} />}
          {isAuthenticated ? <Route path="/placeorder" component={PlaceOrder} exact /> : <Redirect to={'/'} />}
          {isAuthenticated ? <Route path="/userDetails" component={UserDetails} exact /> : <Redirect to={'/'} />}
          <Route path="*" exact component={NotFound} />
        </Switch>
        {Products.length >= 1 ? <Footer /> : ''}
      </Router>

    </div>
  );
}

export default App;
