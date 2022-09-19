import React, {Component} from 'react';
import CountUp from 'react-countup';
import './countup.scss';
class CounterBlock extends Component {
    render (){
        return (
            <div className={`countup-wrap`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={18} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>Bodegas</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={4500} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>Precio por metro</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <CountUp start={0} end={3555000} delay={0}>
                                {({ countUpRef }) => (
                                    <div className="countup-box">
                                        <div className="counter-number">
                                            <span ref={countUpRef} />
                                        </div>

                                        <div className="counter-title">
                                            <span>Montos de inversión desde</span>
                                        </div>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CounterBlock