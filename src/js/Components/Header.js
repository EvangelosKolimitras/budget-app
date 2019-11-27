import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink  } from 'react-router-dom'

const Header = props => (
    <header>
        <h1>{props.title}</h1>
        <ul>
            <NavLink exact activeClassName="is-active" to="/">Home</NavLink >
            <NavLink activeClassName="is-active" to="/addexp">Add</NavLink >
            <NavLink activeClassName="is-active" to="/edit">Edit</NavLink >
            <NavLink activeClassName="is-active" to="/help">Help</NavLink >
        </ul>
    </header>
)

export default Header
