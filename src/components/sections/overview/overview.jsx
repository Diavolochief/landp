import React, { Component,} from 'react';
import Heading from "../../common/heading/heading";
import AOS from 'aos';

class OverviewSection extends Component {
    render() {
        AOS.init({
            duration: 1200,
          })
          
        return (
            <div className="container-fluid px-md-4">
                <div className="row mx-lg-4">
                    
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <div className="w-lg-75 mx-auto">
                        <Heading><h1 class="txt">Terrenos en Pre-Venta para bodegas y naves industriales</h1></Heading>
                        <p className="text-black">AMENIDADES Y CARACTERÍSTICAS:</p>
                        <ul className='parra'>
                        <li>Business Center</li>
                        <li>Acceso controlado<br/></li>
                        <li>Seguridad 24/7</li>
                        <li>Muro perimetral</li>
                        <li>Plataforma de cimentación</li>
                        <li>Red contra incendios</li>
                        <li>Pozo y cisterna propios</li>
                        <li>Estacionamiento para visitas</li>
                        <li>Vialidades se concreto</li>
                        <li>Instalaciones ocultas</li>
                        <li>Red de alumbrado y electricidad de tensión media</li>
                        <li>Andenes de descarga</li>
                        </ul>
                        
                  
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center " >
                        <img className="img-fluid uwu " src="/assets/imagewebp/theme/slide4.webp" alt=""  data-aos="fade-left" data-aos-delay="100"></img>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default OverviewSection