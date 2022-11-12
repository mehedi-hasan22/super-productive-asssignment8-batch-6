
import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Main.css'
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
// import Activity from '../Activity/Activity';

const Main = () => {

    const [activities, setActivity] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivity(data))
    }, [])
    const handleClick = (time) => {
        // console.log('clicked', time)
        const newCart = [...cart, time]
        setCart(newCart)
    }
    return (
        <div>
            <Header></Header>




            <div className="mx-5 mt-5">
                <div className="row main-flex">
                    <div className="activities col-sm-12 col-lg-9 bg-light rounded-3 ms-auto">
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
                    <div className="col-sm-12 col-lg-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;