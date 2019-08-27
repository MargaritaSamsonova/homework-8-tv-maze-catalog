// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, { Component } from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import Search from '../Search'
import ShowPage from '../ShowPage'

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Search} />
                    <Route path="/show/:id" component={ShowPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}
