import React, {Component} from 'react';
import {withTranslate} from 'react-redux-multilingual'
import './footer.scss';
import Copyright from "../copyright/copyright";
import ContactForm from "../contact-form/contact-form";


class FooterOne extends Component {
   
    render() {
        const {translate} = this.props;
        return (
            <footer className="site-footer">
            
                {/*Section 2*/}
                <div className="section-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <h6 className="heading-title">Ubicacion</h6>
                                  <p>EL  Mejor Lugar Para tu inversion!</p>
                                <div className="icon-list footer-address">
                                    <ul>
                                        <li>
                                            <span className="icon-list-icon">
                                                Direccion:
                                            </span>
                                            <span className="icon-list-text"> Parque Industrial Circuito Sur </span>
                                        </li>   
                                        <li>
                                            <span className="icon-list-icon">
                                                Telefono:
                                            </span>
                                            <span className="icon-list-text">012-345-6789</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                E-MAIL:
                                            </span>
                                            <span className="icon-list-text">LANDPARK@ejemplo.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <h6 className="heading-title">CONTACTANOS</h6>
                                <div className="image-box-wrap">
                                    <div className="image-box-img"><img src="/assets/imagewebp/theme/avatar_footer.webp" alt="" className={`img-fluid`}/></div>
                                        <h3 className="image-box-title">LANDPARK</h3>
                                </div>
                                <div className="icon-list">
                                    <ul>
                                        <li>
                                            <span className="icon-list-icon">
                                                <i className="fa fa-phone"></i>
                                            </span>
                                            <span className="icon-list-text">012-888-2222</span>
                                        </li>
                                        <li>
                                            <span className="icon-list-icon">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <span className="icon-list-text">LANDPARK@ejemplo.com</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-12"></div>
                            <div className="col-lg-4 col-md-12">
                                <h6 className="heading-title">Preguntanos...</h6>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Section 3*/}
                <div className="section-3">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm-12">
                                <Copyright title="LandPark"/>
                            </div>
                            <div className="col-sm-12">
                                <div className="social">
                                    <a href="https://www.facebook.com/LandParkTlajomulco">
                                        <span className="screen-reader-text">Facebook</span>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="https://www.instagram.com/landparktlajomulco/?igshid=YzA2ZDJiZGQ%3D">
                                        <span className="screen-reader-text">Twitter</span>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <span className="screen-reader-text">Youtube</span>
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default withTranslate(FooterOne);
