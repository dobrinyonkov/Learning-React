import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { User } from '../components/User';
import { Main } from '../components/Main';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import "./Dashboard.css"

import { setName } from '../actions/userAction'
import { Siderbar } from './Siderbar';
import { DashboardMain } from './DashboardMain';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="container-fluid dashboard">
                <div className="row">
                    <Siderbar />

                    <DashboardMain />
                </div>
            </div>
        );
    }
}



