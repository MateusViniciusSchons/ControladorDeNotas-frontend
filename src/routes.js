import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/Calculadora'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Materias from './pages/Materias'
import Materia from './pages/Materia'
import CriarMateria from './pages/CriarMateria'

import isAuthenticated from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
      
    <Route 
        {...rest} 
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', stat: { from: props.location } }} />
            )
        }
    />
)

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <PrivateRoute path="/materias" exact component={Materias} />
                <PrivateRoute path="/materias/create" exact component={CriarMateria} />
                <PrivateRoute path="/materias/:id" exact component={Materia} />
            </Switch>
        </BrowserRouter>
    )
}