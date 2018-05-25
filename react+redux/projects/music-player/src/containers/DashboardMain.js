import React from "react";
import { Switch, Route } from 'react-router-dom'

import DragAndDrop from './DashboarFileUpload'
import { DashboardHome } from './DashboardHome'


export class DashboardMain extends React.Component {
    render() {
        return (
            <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                <h1>Dashboard</h1>
                <Route exact path='/dashboard' component={DashboardHome} />
                <Route path='/dashboard/upload' component={DragAndDrop} />
            </main>
        );
    }
}