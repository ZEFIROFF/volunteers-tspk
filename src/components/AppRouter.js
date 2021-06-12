import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import routes from '../routes'

const AppRouter = () => {
    return (
        <Switch>
            {
                routes.map(({path, component}) => (
                    <Route key={path} path={path} component={component} exact/>
                ))
            }
            <Redirect to="/login"/>
        </Switch>
    )
}

export default AppRouter