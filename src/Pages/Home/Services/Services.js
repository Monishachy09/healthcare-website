import React, { useEffect, useState } from 'react';
import FakeData from '../../../AllData/FakeData.json'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])

 useEffect (() => 
        {
            setServices(FakeData);
    },[])

    return (
        <section>
        <div id="services" className="container">
            <div className="text-center pt-3">
                <h2>Services That We Have</h2>
                <h5>We treat every type of digestive disorders.</h5>
            </div>
            <div className="row">
                
                    {
                        services.map((service, index) => {
                            return (
                                     <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center mt-5 mb-5">
                                 <Card style={{ width: '20rem' }}>
                                    
                                 <div className="text-center">
                                        <Card.Img variant="top" src={service.img} style={{width:'100%',height:'250px'}}/>
                                        </div>
                                   
                                     <Card.Body className="text-center">
                                         
                                         <h5>{service.Name}</h5>
                                         <Card.Text>
                                            {service.shortDetails}
                                         </Card.Text>
                                        <Link to={`/singleService/${service.id}`}className="nav-link text-secondary"> <button className="btn btn-success">Details</button> </Link> 
                                     </Card.Body>
                                 </Card>
                                 </div>
                                 
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;