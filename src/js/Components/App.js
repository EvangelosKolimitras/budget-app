import React from 'react'
import AppRouter from '../router/AppRouter'

export default class Application extends React.Component {
    state = {
        title: "EK - BudgetApp Software"
    }
    render() {
        return(
           <AppRouter title={this.state.title}></AppRouter>
        )
    }
}
