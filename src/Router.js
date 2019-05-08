import React from 'react';
import { Switch, Route } from 'react-router-dom';
import  Home  from './components/Home/index';
import  User  from './components/User/User';
import { NoMatch } from './components/NoMatch';
import  Cart  from './components/Cart/index';


const Router = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/User' component={User} />
        <Route  path='*' exact={true} component={NoMatch} />
    </Switch>
)


export default Router;