import React from "react";
import { Link } from 'react-router-dom'
import './Header.css'
export class Header extends React.Component {
    render() {
        return (
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //     <a className="navbar-brand" href="#"></a>
            //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            //         <span className="navbar-toggler-icon"></span>
            //     </button>

            //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
            //         <ul className="navbar-nav mr-auto">
            //             <li className="nav-item active">
            //                 <Link to='/'><a className="nav-link">Home</a></Link>
            //             </li>
            //             <li className="nav-item">
            //                 <Link to='/player'><a className="nav-link">Player</a></Link>
            //             </li>
            //             <li className="nav-item dropdown">
            //                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     Dropdown
            //                 </a>
            //                 <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            //                     <a className="dropdown-item" href="#">Action</a>
            //                     <a className="dropdown-item" href="#">Another action</a>
            //                     <div className="dropdown-divider"></div>
            //                     <a className="dropdown-item" href="#">Something else here</a>
            //                 </div>
            //             </li>
            //             <li className="nav-item">
            //                 <a className="nav-link disabled" href="#">Disabled</a>
            //             </li>
            //         </ul>
            //         <form className="form-inline my-2 my-lg-0">
            //             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            //             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            //         </form>
            //     </div>
            // </nav>
            <div className="header masthead clearfix">
                <div className="inner">
                    <h3 className="masthead-brand">Music Place</h3>
                    <nav className="nav nav-masthead">
                        <Link to='/'><p className="mx-3 nav-link active">Home</p></Link>
                        <Link to='/player'><p className="mx-3 nav-link active">Player</p></Link>
                        <Link to='/dashboard'><p className="mx-3 nav-link active">Dashboard</p></Link>
                    </nav>
                </div>
            </div>
        );
    }
}