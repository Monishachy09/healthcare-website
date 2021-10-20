import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import conData from '../../AllData/conditionsData.json'

const SingleCondition = () => {
    const {id} = useParams();
    const [conditionalId, setConditionalId] = useState({});

    useEffect(()=>{
        setConditionalId(conData.find(con => con.id == id))
    },[conditionalId])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 pt-5">
                    <img src={conditionalId?.img} alt="" className="img-fluid" />
                    <h2>{conditionalId?.title}</h2>
                    <h4>{conditionalId?.deta}</h4>
                    <h6>{conditionalId?.Details}</h6>
                    <h2>{conditionalId?.qes}</h2>
                    <p>{conditionalId?.ans}</p>
                    <p>{conditionalId?.ans2}</p>
                    <div className="mt-3 pb-3 text-center">
               <Link to="/"><button className="btn btn-info">Go Back</button></Link>
          </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCondition;



