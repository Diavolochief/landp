import React, {Component} from 'react';
import './countup.scss';
class CounterBlock extends Component {
    render (){
        return (
            <div className={`countup-wrap`}>
                <div className="container">
                    <div className="row">

                        <div className="col-sm">
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span>18</span>
                                        </div>

                                        <div className="counter-title">
                                            <span>Lotes industriales</span>
                                        </div>
                                    </div>
                                
                        </div>

                        <div className=" col-sm">
                            
                               
                                    <div className="countup-box">
                                        <div className="counter-number">
                                        <span>$4,500</span>
                                        </div>

                                        <div className="counter-title">
                                            <span>Precio por metro</span>
                                        </div>
                                    </div>
                        </div>

                        <div className="col-sm">
                                    <div className="countup-box">
                                        <div className="counter-number">
                                        <span>$3'555,000</span>
                                        </div>
                                        <div className="counter-title">
                                            <span>Montos de inversión desde</span>
                                        </div>
                                    </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CounterBlock