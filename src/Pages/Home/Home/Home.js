import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Conditions from '../../Home/conditions/Conditions';
import SmallBanner from '../smallBanner/SmallBanner';
import AboutUs from '../../aboutUs/AboutUs';
import Footer from '../../Shared/Footer/Footer';



const Home = () => {
    return (
        <div id="home">
            <Banner/>
           <Conditions/>
           <SmallBanner/>
           <Services/>
           <AboutUs/>
            <Footer/>
        </div>
    );
};

export default Home;