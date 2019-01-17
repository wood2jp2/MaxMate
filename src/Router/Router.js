import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../Components/Header'
import HomePage from '../Components/HomePage'
import Counter from '../Components/Counter'
import PageNotFound from '../Components/PageNotFound'

export default () => (
    <div>
        <Router>
            <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/counter" component={Counter} />
                <Route component={PageNotFound} />
            </Switch>
            </div>
        </Router>
    </div>
)
