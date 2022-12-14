import React, { Component } from 'react';
import './amenities.scss';
import Heading from "../../common/heading/heading";
import CarouselPage1 from "../../common/slider/slider1";

class AmenitiesSection extends Component {
    render() {
        return (
            <div className="row align-items-center"  data-aos="zoom-in" data-aos-delay="1000">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <CarouselPage1 />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 content-right">
                <Heading><h1 class="txt">UBICACION</h1></Heading>
                    <p className="mb-5 parra">
                        •En el corredor industrial en crecimiento Circuito Metropolitano Sur <br />
                        •Frente a pueblo Cruz Vieja, entre San Isidro Mazatepec y Santa Cruz de las Flores. <br />
                        •Cercano a laboratorio PISA, CEDIS Oxxo, y otras grandes industrias
                    </p>
                </div>
            </div>
        )
    }
}

export default AmenitiesSection