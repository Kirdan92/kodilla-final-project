import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/index';
import  User  from './components/User/User';
import  ProductDetails  from './components/Products/ProductDetails';
import { NoMatch } from './components/NoMatch';
import  Cart  from './components/Cart/index';
import  Checkout  from './components/Checkout/Checkout';
import  SummaryPage  from './components/SummaryPage/SummaryPage';


const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/product/:id" component={ProductDetails} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/summary' component={SummaryPage} />
        <Route exact path='/User' component={User} />
        <Route  path='*' exact={true} component={NoMatch} />
    </Switch>
)


export default Router;