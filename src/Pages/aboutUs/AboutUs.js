import React from 'react';
import AboutImg from '../../images/About.jpg'

const AboutUs = () => {
    return (
        <div>
            <section>
                <div id="about" className="container pb-5 pt-5">
                    <div className="row align-items-center ">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={AboutImg} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <div>
                                <h6 className="fw-bold text-danger">About us</h6>
                                <h2 className="text-capitalize">Welcome to Health-Care Clinic</h2>
                                <p className="mt-3">We can arrange procedures such as endoscopy, colonscopy, and gastrointestinal treatments at some of the top hospitals in the india. Wherever you are being treated.</p>
                                <button className="btn btn-success pe-5 ps-5 pt-2 pb-2   border-danger text-white bg-danger mt-3"> Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;