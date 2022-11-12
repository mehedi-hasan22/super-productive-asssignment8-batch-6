import React from 'react';
import './cart.css'

const Cart = ({ cart }) => {

    const addBreak = (breakTime) => {
        document.getElementById('break-time').innerText = breakTime;
    }

    console.log(cart)

    let total = 0;
    for (const time of cart) {
        total = total + time;
    }
    return (
        <div className='cart container'>

            <div className='user-detail'>
                <div className='user-icon'>
                    <div><img src="https://storage.needpix.com/rsynced_images/head-659651_1280.png" alt="" /></div>
                </div>
                <div>
                    <h3>Mehedi Hasan</h3>
                    <p><small>Dhaka, Bangladesh</small></p>
                </div>
            </div>

            <div className='user-info bg-light m-2 p-3 container rounded'>
                <div className='user-infos'>
                    <h4>75 <small>kg</small></h4>
                    <p>Weight</p>
                </div>
                <div className='user-infos'>
                    <h4>5.8</h4>
                    <p>Height</p>
                </div>
                <div className='user-infos'>
                    <h4>17 <small>yrs</small></h4>
                    <p>Age</p>
                </div>
            </div>

            <div className="break ">
                <h5 className='ms-2'>Add A break:</h5>
                <div className='button-group ms-3'>
                    <button onClick={() => addBreak(15)} className='break-button btn btn-light rounded-pill p-2 m-1'>15m</button>
                    <button onClick={() => addBreak(30)} className='break-button btn btn-light rounded-pill p-2 m-1'>30m</button>
                    <button onClick={() => addBreak(45)} className='break-button btn btn-light rounded-pill p-2 m-1'>45m</button>
                    <button onClick={() => addBreak(60)} className='break-button btn btn-light rounded-pill p-2 m-1'>60m</button>
                </div>
            </div >


            <div className='Exercise'>
                <h5 className='ms-2'>Exercise Details:</h5>
                <div className='bg-light m-2 p-2 container rounded text-center'>
                    <h5>Break time : <span id='break-time' >0</span> min</h5>
                </div>
                <div className='bg-light m-2 p-2 container rounded text-center'>
                    <h5>Exercise Time : {total} min</h5>
                </div>
            </div>
        </div >
    );
};

export default Cart;