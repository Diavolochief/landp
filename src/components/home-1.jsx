import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
// Import custom components
import { Container, Button, Link } from 'react-floating-action-button'

import SliderHome from "./common/slider/slider";
import OverviewSection from "./sections/overview/overview";
import CounterBlock from "./common/countup/countup";
import ContactPage from './pages/contact/contact';
import CallToActionSection from "./sections/caltoaction/caltoaction";
import AmenitiesSection from "./sections/amenities/amenities";
import OverviewFluidSection from "./sections/overview-fluid/overview-fluid";
import GallerrySection from './sections/gallerry/gallerry';
class Home1 extends Component {
    render() {
        return (

            <div id='home' className={`home-page-wrap`}>


                <Helmet>
                    <title>LandPark</title>
                </Helmet>
                <div className="section-wrapper pt-0 pb-0 separador">
                    <SliderHome />
                </div>
                <div id='terrenos' className="section-wrapper separador">
                    <OverviewSection />
                </div>
                <hr class="hr" />
                <div id='ventajas' className="section-wrapper ">
                    <OverviewFluidSection />
                </div>

                <div className="section-wrapper separador" data-aos="zoom-in" data-aos-delay="100">
                    <CounterBlock />
                </div>

                <hr class="hr" />
                <div id='ubicacion' className="section-wrapper pl-6 pr-6 ">
                    <AmenitiesSection />
                </div>
                <div className="section-wrapper pl-6 pr-6" id='galeria' >
                    <GallerrySection />
                </div>
                <div className="section-wrapper pb-0 ">
                    <CallToActionSection />
                </div>
                <div className="section-wrapper" id='contactos'>
                    <ContactPage />
                </div>


            </div>
        )

    }
}

export default Home1;