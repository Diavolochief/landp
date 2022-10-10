import React, { Component } from 'react';
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from 'react-helmet';
import './contact.scss';

class ContactPage extends Component {
    render() {

        return (

            <div className={`contact-page-wrap`}>
                <div className="section-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon">
                                    <div className="icon" data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-center"><i className="opal-icon-phone" ></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">Telefono :</span>
                                        <p className="description">012-345-6789</p>
                                        <p className="description">539-737-1380</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon">
                                    <div className="icon" data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-center"><i className="opal-icon-point" ></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">Direcccion:</span>
                                        <p className="description">Logan Barker, 865 Oak Boulevard</p>
                                        <p className="description">Elk Grove, Vermont 95184</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="box-icon no-border">
                                    <div className="icon" data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-center"><i className="opal-icon-envelope"></i></div>
                                    <div className="content">
                                        <span className="title text-uppercase">E-mail:</span>
                                        <p className="description">support@maisonco.com</p>
                                        <p className="description">info@maisonco.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="form-contact mb-5">
                        <h3 className="text-uppercase text-center">Ponerte en contacto</h3>
                        <div className="mt-4 row">
                            <div className="col-12 mb-3">
                                <textarea id="textareaComment" className="form-control" placeholder="dejanos tu mensaje" rows="4"></textarea>
                            </div>
                            <div className="col-6 mb-3">
                                <input type="text" className="form-control" id="exampleInputName" placeholder="Tu Nombre" />
                            </div>
                            <div className="col-6 mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Tu Correo" />
                            </div>
                            <div className="col-12 mb-3">
                                <input type="phone" className="form-control" id="exampleInputPhone1" placeholder="Tu Numero " />
                            </div>
                            <div className="col-12">
                                <button type="submit" onClick={() => window.location = '/thankuPage'}
                                  className="btn btn-primary w-100">Dejanos Un Mensaje <i className="opal-icon-arrow"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage