import React, { useState } from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import CarouselData from '../../../AllData/carouselData.json';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        
            <div className="mt-5 pt-5">

                <Carousel fade activeIndex={index} onSelect={handleSelect} interval={2000}>
                    {
                        CarouselData.map((carousel, index) => (
                            <Carousel.Item key={index} className="carouselImg">
                               
                                    <img
                                        className="img-fluid  "
                                        src={carousel.img}
                                        alt="First slide"
                                    />
                                
                                    <Carousel.Caption style={{color:'black'}} >
                                        <h3>{carousel.title}</h3>
                                        <p>{carousel.subtitle}</p>
                                    </Carousel.Caption>
                                    
                                
                            </Carousel.Item>
                        ))
                    }

                </Carousel>

            </div>
       
    );
};


export default Banner;