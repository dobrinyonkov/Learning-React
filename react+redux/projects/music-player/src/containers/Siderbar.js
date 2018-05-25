import React from "react";
import { Link } from 'react-router-dom';

export const Siderbar = (props) => {
    return (
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <Link to='/dashboard'><p className="nav-link active" href="#">Overview</p></Link>
                </li>
                <li className="nav-item">
                    <Link to='/dashboard/upload'><p className="mx-3 nav-link">Upload</p></Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Analytics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Export</a>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">Nav item</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Nav item again</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">One more nav</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Another nav item</a>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#">Nav item again</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">One more nav</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Another nav item</a>
                </li>
            </ul>
        </nav>
    );
}