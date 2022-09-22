import React, {Component} from 'react';
import Slider from "react-slick";
import './slider.scss';


import Modal from 'react-responsive-modal';

class CarouselPage1 extends Component {

    constructor(props) {
        super(props);
        this.data = [
            {
                image: `/assets/imagewebp/slider/slide-amenties1.webp`,
                title: `-VENTAJAS DE LA ZONA`,
                description: '•Conectividad las principales carreteras de acceso a la ciudad',
                link: '#'
            },
            {
                image: `/assets/imagewebp/slider/slide-amenties2.webp`,
                title: `-VENTAJAS DE LA ZONA`,
                description: '•Acceso a todos los servicios',
                link: '#'
            },
            {
                image: `/assets/imagewebp/slider/slide-amenties3.webp`,
                title: `-VENTAJAS DE LA ZONA`,
                description: '•Cercano a varios poblados para acceso a mano de obra.',
                link: '#'
            }
        ]

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);


        this.state = {
            active: this.data[0]
        }
    }

    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }

    slideChange = (old, index) => {
        this.setState({
            active: this.data[index]
        })
    }
    onOpenModal = (e) => {
        e.preventDefault();
        this.setState({open: true});
    };

    onCloseModal = () => {
        this.setState({open: false});
    };

    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        

        return (
            <div className={'carousel1-wrap position-relative'}>
                <Slider ref={slide => (this.slider = slide)} {...settings} beforeChange={this.slideChange}>
                    {this.data.map((data, index) =>
                        <div className="slider-item" key={index}>
                            <img src={data.image} alt=""/>
                        </div>
                    )}
                </Slider>
                <div className="slider-content d-flex justify-content-end align-items-end flex-wrap">
                    <div className="navigation">
                        <button className="arrow-button arrow-prev" onClick={this.previous}>
                            Previous
                        </button>
                        <button className="arrow-button arrow-next" onClick={this.next}>
                            Next
                        </button>
                    </div>
                    <div className="slider-contentn">
                        <div className="slider-info mt-auto">
                            <h4 className="text-white text-uppercase mb-4">{this.state.active.title}</h4>
                            <p>{this.state.active.description}</p>
                            <i className="fa fa-map-marker pin"></i>
                            <button className="btn btn-link p-0" type="button" onClick={this.onOpenModal} >   Ver ubicación </button>
                        </div>
                        <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <div className="modal-dialog modal-lg modal-dialog-centered " role="document">
                        <div className="modal-content quick-view-modal">
                            <div className="modal-body">
                                <h6 className="heading-title">Mapa</h6>
                                <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.2140435963397!2d-103.57416180000001!3d20.49745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425ff838beddc59%3A0x665cfac56000cd98!2sLandPark!5e0!3m2!1ses-419!2smx!4v1663879345771!5m2!1ses-419!2smx"   frameborder="0"></iframe>      
                            </div>
                        </div>
                    </div>
                </Modal>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarouselPage1