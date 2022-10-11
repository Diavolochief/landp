import React, { Component } from 'react';
// Custom Components
import HeaderOne from './components/common/headers/header-one';
import FooterOne from "./components/common/footers/footer-one";
import PushMenu from 'react-push-menu';
import LinkComponent from "./lib/menuPush/LinkComponent";
import { Container, } from 'react-floating-action-button'
import ModalForm from './modalForm'
import { FloatingButton, Item } from "react-floating-button";
import others from './iconos/facebook2.svg'
import contacto from './iconos/contacts.svg'
import what from './iconos/whats.svg'
import pho from './iconos/phone.svg'

import './lib/menuPush/component.scss';

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }

        this.load();
    }

    load = () => {
        fetch('./api/menu.json')
            .then((response) => response.json())
            .then((res) => {
                this.menu = res;
                this.setState({ isLoading: false })
                document.querySelector(".loader-wrapper").style = "display: none";
            })
    };



    render() {
        return !this.state.isLoading && (
            <>
                <div class="hea">
                    <HeaderOne logoName={'logo.png'} menu={this.menu} />
                </div>
                <div className="opal-wrapper">
                    <PushMenu
                        backIcon={<i className="fa fa fa-arrow-left"></i>}
                        expanderComponent={() => {
                            return (<i className="fa fa-chevron-right"></i>)
                        }}
                        autoHide={true}
                        nodes={{ children: this.menu }}
                        type={'cover'}
                        linkComponent={LinkComponent}
                        propMap={{ url: 'link' }}>


                        <div id="page" className="site">
                            {this.props.children}
                            <FooterOne logoName={'logo.png'} />
                        </div>

                    </PushMenu>
                </div>
                    <Container>
                      <ModalForm/>
                    </Container>

                <Container>
                    <FloatingButton
                        right={true}
                        size={80}
                        backgroundColor={'#cabe9f'}
                        color={'black'}
                        imgSrc={contacto}
                        >

                        <Item
                            imgSrc={others}
                            backgroundColor={'#cabe9f'}
                            onClick={() => window.location = 'https://www.facebook.com/LandParkTlajomulco'}
                            />
                        <Item
                            imgSrc={what}
                            backgroundColor={'#cabe9f'}
                            
                            onClick={() => {
                                console.log("callback function here");
                            }}
                            />
                        <Item
                            imgSrc={pho}
                            backgroundColor={'#cabe9f'}
                            onClick={() => {
                                console.log("callback function here");
                            }}
                            />

                    </FloatingButton>


                </Container>


            </>
        );
    }
}

export default App;