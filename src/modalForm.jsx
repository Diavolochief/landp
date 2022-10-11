import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './components/common/contact-form/contact-form';


const ModalForm = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button  className="modalFors" variant="primary" onClick={handleShow}>
                <h5>cotiza ahora</h5>
            </Button>

            <Modal show={show} onHide={handleClose} centered  className="centeredModal">
                <Modal.Header >
                    <Modal.Title>Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ContactForm />


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        cerrar
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalForm