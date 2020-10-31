import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import NotFound from "./views/NotFound";
import Header from "./components/Header/Header";

const App = () => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [page, setPage] = useState([{}]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route
          path="/Product/:pageNumber"
          render={(props) => {
            return <Product {...props} page={page} setPage={setPage} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
