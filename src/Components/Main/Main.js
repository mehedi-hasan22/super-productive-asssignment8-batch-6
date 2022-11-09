import React from 'react';
import './Main.css'
import Activity from '../Activity/Activity';

const Main = () => {
    return (
        <div>

            {/* ---------------Navbar starts here -----------------*/}

            <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
                <div className="container-fluid text-white">
                    <a className="navbar-brand fs-4 m-3" href="/#">Super Productive</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fs-5 ms-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">History</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* ---------------Navbar ends here -----------------*/}
            <Activity></Activity>
        </div>
    );
};

export default Main;