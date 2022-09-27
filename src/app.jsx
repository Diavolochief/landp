import React, { Component } from 'react';
// Custom Components
import HeaderOne from './components/common/headers/header-one';
import FooterOne from "./components/common/footers/footer-one";
import PushMenu from 'react-push-menu';
import LinkComponent from "./lib/menuPush/LinkComponent";
import { Container, Button, Link,Close } from 'react-floating-action-button'




// import { FloatingButton, Item } from "react-floating-button";
// import downloadIcon from "./assets/";
// import forwardIcon from "./assets/FORWARD.svg"

import './lib/menuPush/component.scss';

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
                <Container >
                    <Link href="https://www.instagram.com/landparktlajomulco/?igshid=YzA2ZDJiZGQ%3D"
                        tooltip="Telefono"
                        styles={{ backgroundColor: 'blue ', color: 'white',  }}
                        icon="fa fa-phone icons"  />
                    <Link href="#"
                        tooltip="Whatsapp"
                        styles={{ backgroundColor: '#25D366', color: 'white',  }}
                        icon="fa fa-whatsapp icons" />
                    <Link href="https://www.facebook.com/LandParkTlajomulco"
                        tooltip="Facebook"
                        styles={{ backgroundColor: '#3b5998', color: 'white', }}
                        icon="fa fa-facebook icons1" />

                    <Button
                        className="fab-item"
                        styles={{ backgroundColor: '#cabe9f', color: 'black',  }}
                        tooltip="Contacto"
                        icon="fa fa-arrow-up "
                        rotate={true}
                        
                        />


                    
                </Container>
{/* 
                <FloatingButton>
                    <Item
                        imgSrc={downloadIcon}
                        onClick={() => {
                            console.log("callback function here");
                        }}
                    />
                    <Item
                        imgSrc={forwardIcon}
                        onClick={() => {
                            console.log("callback function here");
                        }}
                    />
                </FloatingButton>; */}




            </>
        );
    }
}

export default App;