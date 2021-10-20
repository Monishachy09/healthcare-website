import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import FakeData from '../../AllData/FakeData.json';

const SingleService = () => {
    const {id} = useParams();
    const [singleId, setSingleId] = useState({});

    useEffect(()=>{
        setSingleId(FakeData.find(ser => ser.id == id))
    },[singleId])
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mt-5">
                        <img src={singleId?.img} alt="" className="img-fluid" />
                         <h3>{singleId?.Name}</h3>
                        <p>{singleId?.fullDetails}</p>
                        <p>{singleId?.treatments}</p>
                        <div className="mt-3 pb-3 text-center">
               <Link to="/"><button className="btn btn-info">Go Back</button></Link>
          </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleService;