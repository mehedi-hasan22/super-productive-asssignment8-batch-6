import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>

            {/* ---------------Navbar starts here -----------------*/}

            <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-primary">
                <div className="container container-fluid text-white">
                    <a className="navbar-brand fs-1 m-3" href="/#">  <p><FontAwesomeIcon icon={faHeadSideVirus} /> Super Productive</p></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav fs-5 ms-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item">
                                <a className="nav-link active" href="QNA.html">Question & Answer</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* ---------------Navbar ends here -----------------*/}
        </div>
    );
};

export default Header;