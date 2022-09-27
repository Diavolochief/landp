import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Heading from "../../common/heading/heading";

class GallerrySection extends Component {
    state = {
        isOpen: false
    }

    open(e, image) {
        e.preventDefault()
        this.image = image
        this.setState({isOpen: true})
    }

    render() {
        const {flexRow} = this.props;
        return (
            <>
                <Heading>Galeria</Heading>
                <div className="gallerry-wrap pb-6" data-aos="zoom-in" data-aos-delay="50">
                    <div className={`row${this.props.flexRow ? ' flex-row-reverse' : ''}`}>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/galeria/photo1.jpeg')}>
                                    <img className="img-fluid" src="/assets/galeria/photo1.jpeg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/galeria/photo2.jpeg')}>
                                    <img className="img-fluid" src="/assets/galeria/photo2.jpeg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-6 col-md-12">
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/galeria/photo3.jpeg')}>
                                    <img className="img-fluid" src="/assets/galeria/photo3.jpeg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                            <div className="gallerry-image">
                                <a href="#" onClick={(e) => this.open(e, '/assets/galeria/photo4.jpeg')}>
                                    <img className="img-fluid" src="/assets/galeria/photo4.jpeg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-md-12 ">
                            <div className="gallerry-image ">
                                <a href="#" onClick={(e) => this.open(e, '/assets/galeria/photo5.jpeg')}>
                                    <img className="img-fluid" src="/assets/galeria/photo5.jpeg" alt=""/>
                                    <div className="gallery-item-overlay"><i className="opal-icon-zoom"></i></div>
                                </a>
                            </div>
                        </div>


                        </div>
                    </div>
                {
                    this.state.isOpen &&
                    <Lightbox onCloseRequest={() => this.setState({isOpen: false})} mainSrc={this.image}/>
                }
            </>
        )
    }
}

export default GallerrySection