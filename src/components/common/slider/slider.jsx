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
            <div className={'slider-wrap position-relative'}>
                <Slider {...settings}>
                    <div className="slider-item position-relative">
                        <div className="slider-image" style={{backgroundImage: 'url(/assets/imagewebp/theme/slide1.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                                <div className="text-center w-100">
                                    <h2 className="text-white">LandPark <br/>-<br/>Terrenos en Pre Venta</h2>
                                   
                                </div>
                              
                            </div>
                        </div>
                    </div>

                    <div className="slider-item position-relative">
                        <div className="slider-image" style={{backgroundImage: 'url(/assets/imagewebp/theme/slide2.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                            <div className="text-center w-100">
                                    <h2 className="text-white">LandPark <br/>-<br/>Terrenos en Pre Venta </h2>         
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
                                    <h2 className="text-white">LandPark <br/>-<br/>Terrenos en Pre Venta </h2>         
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-item position-relative">
                        <div className="slider-image" style={{backgroundImage: 'url(/assets/imagewebp/theme/slide4.webp)'}}>
                        </div>
                        <div className="container">
                            <div className="slider-content">
                            <div className="text-center w-100">
                                    <h2 className="text-white">LandPark<br/>-<br/>Terrenos en Pre Venta </h2>         
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