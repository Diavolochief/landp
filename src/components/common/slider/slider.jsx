import React, {Component} from 'react';
import Slider from "react-slick";
import './slider.scss';
class SliderHome extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className={'slider-wrap position-relative'}   data-aos="zoom-out" data-aos-delay="100">
                <Slider {...settings}>
                    <div className="slider-item position-relative">
                        <div className="slider-image" style={{backgroundImage: 'url(/assets/imagewebp/theme/slide1.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                                <div className="text-center w-100">
                                    <h2 className="sliderText text-white back">LandPark <br/>-<br/>Terrenos en Pre Venta</h2>
                                   
                                </div>
                              
                            </div>
                        </div>
                    </div>

                    <div className="slider-item position-relative">
                        <div className="slider-image " style={{backgroundImage: 'url(/assets/imagewebp/theme/slide2.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                            <div className="text-center w-100">
                                    <h2 className="sliderText text-white back">LandPark <br/>-<br/>Terrenos en Pre Venta </h2>         
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item position-relative">
                        <div className="slider-image" style={{backgroundImage: 'url(/assets/imagewebp/theme/slide3.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                            <div className="text-center w-100">
                                    <h2 className="sliderText text-white back">LandPark <br/>-<br/>Terrenos en Pre Venta </h2>         
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item position-relative cel">
                        <div className="slider-image " style={{width:'100%' ,height:'100%', marginTop:100,  backgroundImage: 'url(./assets/imagewebp/slider/slide.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                            <div className="text-center w-100">
                                    <h2 className="sliderText text-white back">LandPark<br/>-<br/>Terrenos en Pre Venta </h2>         
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item position-relative">
                        <div className="slider-image celu" style={{backgroundImage: 'url(/assets/imagewebp/theme/slide4.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                            <div className="text-center w-100">
                                    <h2 className=" sliderText text-white back">LandPark<br/>-<br/>Terrenos en Pre Venta </h2>         
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default SliderHome