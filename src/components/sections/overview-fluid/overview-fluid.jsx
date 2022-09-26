import React, {Component} from 'react';
import Heading from "../../common/heading/heading";

class OverviewFluidSection extends Component {
    render (){
        return (
            <div className="container-fluid px-md-4">
                <div className="row mx-lg-4">
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
                        <img className="img-fluid uwu2 "  data-aos="fade-right" data-aos-delay="100" src="/assets/imagewebp/theme/slide4.webp" alt=""/>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
                        <div className="w-lg-75 mx-auto">
                        <Heading><h1 class="txt">VENTAJAS DE NAVES INDUSTRIALES</h1></Heading>
                            <p className="text-black text-xl mt-5">Somos La Mejor Opcion:</p>
                            <ul className='parra'>
                                <li>Retorno de inversión mayor que vivienda y locales comerciales.</li>
                                <li>Contratos de arrendamiento a largo plazo y con empresas grandes o trasnacionales.</li>
                                <li>Mayor certeza jurídica</li>
                                <li>Mayor plusvalía y menor riesgo </li>
                                <li>Sin gastos en mantenimiento</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default OverviewFluidSection