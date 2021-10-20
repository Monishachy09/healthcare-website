import React from 'react';
import { Link } from 'react-router-dom';

const SmallBanner = () => {
    return (
        <div className="bg-danger p-3 mb-3">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-8 d-flex justify-content-around">
                        <h4 className="text-white">Simply call us at +(800) 12-4567 during our working hours or you can request an appointment.</h4>
                    </div>
                    <div className="col-md-4 d-flex justify-content-around">
                        <div>
                         <Link to="/login"><button className="btn btn-success text-uppercase">Make an Appointment</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner;