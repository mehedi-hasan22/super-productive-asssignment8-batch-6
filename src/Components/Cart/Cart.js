import React from 'react';
import './cart.css'

const Cart = ({ cart }) => {

    const addBreak = (breakTime) => {
        console.log('break clicked', breakTime)
    }

    console.log(cart)

    let total = 0;
    for (const time of cart) {
        total = total + time;
    }
    return (
        <div className='cart container'>
            <div className="break ">
                <h5 className='text-white ms-2'>Add A break:</h5>
                <div className='button-group ms-3'>
                    <button onClick={() => addBreak(15)} className='break-button btn btn-light rounded-pill p-2 m-1'>15m</button>
                    <button onClick={() => addBreak(30)} className='break-button btn btn-light rounded-pill p-2 m-1'>30m</button>
                    <button onClick={() => addBreak(45)} className='break-button btn btn-light rounded-pill p-2 m-1'>45m</button>
                    <button onClick={() => addBreak(60)} className='break-button btn btn-light rounded-pill p-2 m-1'>60m</button>
                </div>
            </div >


            <div className='Exercise'>
                <h5 className='text-white ms-2'>Exercise Details:</h5>
                <div className='bg-light m-2 p-2 container rounded text-center'>
                    <h5>Break time : {0} min</h5>
                </div>
                <div className='bg-light m-2 p-2 container rounded text-center'>
                    <h5>Exercise Time : {total} min</h5>
                </div>
            </div>
        </div >
    );
};

export default Cart;