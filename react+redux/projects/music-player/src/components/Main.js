import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Player } from './Player'
import { Home } from './Home'

export const Main = (props) => {
    return (
        <main className="content">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/player' component={Player} />
            </Switch>
        </main>
    );
}