import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import Textarea from 'react-validation/build/textarea'
import {isEmail, isEmpty, isMobilePhone} from 'validator';
import './contact-form.scss';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            content: ''
        }
    }

    required = (value) => {
        if (isEmpty(value)) {
            return <small className="form-text text-danger">Este Campo es Requerido</small>;
        }
    }

    email = (value) => {
        if (!isEmail(value)) {
            return <small className="form-text text-danger">Formato Invalido de Correo</small>;
        }
    }

    phone = (value) => {
        if (!isMobilePhone(value)) {
            return <small className="form-text text-danger">Formato Invalido De Telefono</small>;
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            alert(' success!' + '\n name: ' + this.state.name + '\n email: ' + this.state.email + '\n phone:' + this.state.phone + '\n content:' + this.state.content + '');
        }
    }

    render() {
        return (
            <Form className="form-group-v1" onSubmit={e => this.onSubmit(e)} ref={c => {
                this.form = c
            }}>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <Input name="name" onChange={(e) => {this.setState({name: e.target.value})}} value={this.state.name} type="text" placeholder="Tu Nombre *" className="form-control" validations={[this.required]}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                            <Input name="phone" onChange={(e) => {this.setState({phone: e.target.value})}}  value={this.state.phone} type="text" placeholder="Telefono *" className="form-control" validations={[this.required, this.phone]}/>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <Input name="email" onChange={(e) => {this.setState({email: e.target.value})}} value={this.state.email} type="email" placeholder="Tu Correo electronico*" className="form-control" validations={[this.required, this.email]}/>
                </div>

                <div className="form-group">
                    <Textarea onChange={(e) => {this.setState({content: e.target.value})}}  value={this.state.content} className="form-control" placeholder="Como Podemos Apoyarte?" rows="3" validations={[this.required]}/>
                </div>
                <button type="submit" className="btn btn-primary mt-4 btn-block">Enviar</button>
                <CheckButton style={{display: 'none'}} ref={c => {
                    this.checkBtn = c
                }}/>
            </Form>
        )
    }
}

export default ContactForm