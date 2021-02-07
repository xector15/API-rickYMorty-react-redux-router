import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../containers/App.jsx'
import Login from '../containers/Login'
import Register from '../containers/Register.jsx';
import Player from '../containers/Player.jsx'
import NotFound from '../containers/NotFound'
import Layaout from '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layaout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/player/:id" component={Player} />
                <Route component={NotFound} />
            </Switch>
        </Layaout>
    </BrowserRouter>
);

export default App;