import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ConditionData from '../../../AllData/conditionsData.json';

const Conditions = () => {
    return (
        <section>
            <div id="conditions" className="container pb-5">
                <div className="text-center pt-5">
                    <h2>Conditions We Treat</h2>
                    <h5>We treat every type of digestive disorders.</h5>
                </div>
                <div className="row">
                    
                        {
                            ConditionData.map((condition, index) => {
                                return (
                                    <div key={index} className="col-lg-3 col-md-6 d-flex justify-content-center mt-5 mb-5">
                                    <Card style={{ width: '18rem' }}>
                                       <div className="text-center">
                                       <Card.Img variant="top" src={condition.img} style={{width:'200px',height:'200px'}}/>
                                       </div>
                                        
                                        <Card.Body className="text-center">
                                            
                                            <Card.Title>{condition.title}</Card.Title>
                                            <Card.Text>
                                               {condition.Details}
                                            </Card.Text>
                                           <Link to={`/singleCondition/${condition.id}`}className="nav-link text-danger"> Read more</Link> 
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

export default Conditions;