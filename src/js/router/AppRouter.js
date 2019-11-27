import React from 'react'
import { BrowserRouter as Router, Route, Switch , NavLink } from 'react-router-dom'

import Header from '../Components/Header'
import HomeComponent from '../Components/HomeComponent'
import AddExpComponent from '../Components/AddExpComponent'
import EditComponent from '../Components/EditComponent'
import HelpComponent from '../Components/HelpComponent'
import NotFoundComponent from '../Components/NotFoundComponent'

const AppRouter = props => (
    <Router>
        <div>
            <Header title={props.title} />
            <Switch>
                <Route exact path="/" component={HomeComponent}   />
                <Route path="/addexp" component={AddExpComponent} />
                <Route path="/edit"   component={EditComponent}   />
                <Route path="/help"   component={HelpComponent}   />
                <Route component={NotFoundComponent} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter
