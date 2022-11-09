import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'
// import Activity from '../Activity/Activity';

const Main = () => {

    const handleClick = (time) => {
        console.log('clicked', time)
    }

    const [activities, setActivity] = useState([])

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])

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




            <div className="mx-5 mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-9 bg-light rounded-3 ms-auto">
                        <div className="activity-container">
                            {
                                activities.map(activity => <Activity
                                    key={activity.id}
                                    activity={activity}
                                    handleClick={handleClick}
                                ></Activity>)
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 bg-info"><p>Details</p></div>
                </div>
            </div>
        </div>
    );
};

export default Main;