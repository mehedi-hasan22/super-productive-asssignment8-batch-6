import React from 'react';
import './Activity.css'

const Activity = ({ handleClick, activity }) => {

    const { name, description, time, img } = activity

    return (
        <div className='activity'>
            <div className="card mt-3" style={{ width: "18rem", minHeight: "20rem" }}>
                <img src={img} style={{ minHeight: "10em", maxHeight: "10em" }} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p>Required time: {time}min</p>
                    <button onClick={() => handleClick(time)} className="btn btn-primary card-btn">Add to list</button>
                </div>
            </div>
        </div >
    );
};

export default Activity;