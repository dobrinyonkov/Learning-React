import React from "react";
import { Link } from 'react-router-dom'

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
            <div class="header masthead clearfix">
                <div class="inner">
                    <h3 class="masthead-brand">Music Place</h3>
                    <nav class="nav nav-masthead">
                        <Link to='/'><a className="mx-3 nav-link active">Home</a></Link>
                        <Link to='/player'><a className="mx-3 nav-link">Player</a></Link>
                        <Link to='/'><a className="mx-3 nav-link">Home</a></Link>
                    </nav>
                </div>
            </div>
        );
    }
}