import "./App.css";
import { useState } from "react";
import React from "react";
import MyContext from "./MyContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import Home from "./views/Home";
import ProductsView from "./views/ProductsView";
import ProductView from "./views/ProductView";
//import Auth from "./views/Auth/Auth";
//import { Card } from "@mui/material";
import Admin from "./components/admin/admin";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <MyContext.Provider value={[cart, setCart]}>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/productsView">Products</Link>
              </li>
              <li>
                <Link to="/Admin">Admin</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/productsView">
              <ProductsView />
            </Route>
            <Route path="/productView/:id">
              <ProductView />
            </Route>
            <Route path="/Admin">
              <Admin />
            </Route>
          </Switch>
        </div>
      </MyContext.Provider>
    </Router>
  );
}
export default App;
