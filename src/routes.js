import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/main';
import Cometa from './pages/cometa';


const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/cometas/:id" component={Cometa}></Route>
        </Switch>
    </BrowserRouter>

)

export default Routes;