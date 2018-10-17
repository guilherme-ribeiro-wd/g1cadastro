import React from 'react';
import {
    FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Form
} from 'react-bootstrap';
var $ = require("jquery");
// window.$ = window.jQuery = require('jquery');
// var mask = require('jquery-mask-plugin');
// $.mask = mask;
// window.mask = mask;
require('jquery-mask-plugin');

const smI = 4;
const smL = 2;
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.change = this.change.bind(this);

        this.state = {
            rSocial: "",
            nFantasia: "",
            cnpj: "",
            ender: "",
            cidade: "",
            estado: "",
            tel: "",
            email: "",
        };
    }

    estados = [
        'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
        'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
        'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
        'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
        'São Paulo', 'Sergipe', 'Tocantins'
    ];

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        // this.typingValidation(e.target.name, e.target.value);
    }

    estadosOption(estados) {
        const options = [];
        for (let i = 0; i < estados.length; i++) {
            options.push(<option key={i} value={estados[i]}>{estados[i]}</option>);
        }
        return options;
    };

    checkEmail = (email) => {
        email = email.toLowerCase();
        if (email.indexOf('@') === -1) {
            return true;
        } else if (email.indexOf('.net') === -1 && 
                    email.indexOf('.com') === -1 &&
                        email.indexOf('.br') === -1) {
            return true;
        }
        return false; 
    }

    typingValidation(field) {
        if (field === 'rSocial') {
            if (this.state.rSocial.length > 0 && this.state.rSocial.length < 5) return 'error'; 
            else if (this.state.rSocial.length >= 5) return 'success'; else return null;
        }
        if (field === 'nFantasia') {
            if (this.state.nFantasia.length > 0 && this.state.nFantasia.length < 5) return 'error'; 
            else if (this.state.nFantasia.length >= 5) return 'success'; else return null;
        }
        if (field === 'cnpj') {
            if (this.state.cnpj.length > 0 && this.state.cnpj.length < 18) return 'error'; 
            else if (this.state.cnpj.length === 18) return 'success'; else return null;
        }
        if (field === 'ender') {
            if(this.state.ender.length > 0 && this.state.ender.length < 1) return 'error';
            else if (this.state.ender >= 1) return 'success'; return null;
        }
        if (field === 'cidade') {
            if(this.state.cidade.length > 0 && this.state.cidade.length < 1) return 'error';
            else if (this.state.cidade >= 1) return 'success'; return null;
        }
        if (field === 'estado') {
            if(this.state.estado.length > 0 && this.state.estado === 'Selecione...') 
            return 'error'; 
            else if (this.state.estado.length > 1) return 'success'; else return null;
        }
        if (field === 'email') {
            if(this.state.email.length > 0 && this.checkEmail(this.state.email)) 
            return 'error'; 
            else if (this.state.email.length > 1) return 'success'; return null;
        }
        if (field === 'tel') {
            if(this.state.tel.length > 0 && this.state.tel.length < 16) return 'error'; 
            else if (this.state.tel.length === 16) return 'success'; else return null;
        }
    }

    submitValidation() {
        let error = false;

        if(this.state.tel.length < 16) {
            error = true;
            document.getElementById('tel').focus();
            // document.getElementById('STF').style.visibility = "visible";
        } else {
            // document.getElementById('STF').style.visibility = "hidden";
        }
        
        if(this.checkEmail(this.state.email)) {
            error = true;
            document.getElementById('email').focus();
            // document.getElementById('SEM').style.visibility = "visible";
        } else {
            // document.getElementById('SEM').style.visibility = "hidden";
        }
        
        if(this.state.estado === 'Selecione...' || this.state.estado.length < 1) {
            error = true;
            document.getElementById('estado').focus();
            // document.getElementById('SES').style.visibility = "visible";
        } else {
            // document.getElementById('SES').style.visibility = "hidden";
        }
        console.log(this.state.estado);
        if(this.state.cidade < 1) {
            error = true;
            document.getElementById('cidade').focus();
            // document.getElementById('SCI').style.visibility = "visible";
        } else {
            // document.getElementById('SCI').style.visibility = "hidden";
        }

        if(this.state.ender < 1) {
            error = true;
            document.getElementById('ender').focus();
            // document.getElementById('SEN').style.visibility = "visible";
        } else {
            // document.getElementById('SEN').style.visibility = "hidden";
        }

        if(this.state.cnpj.length < 18) {
            error = true;
            document.getElementById('cnpj').focus();
            // document.getElementById('SCNPJ').style.visibility = "visible";
        } else {
            // document.getElementById('SCNPJ').style.visibility = "hidden";
        }

        if(this.state.nFantasia.length < 5) {
            error = true;
            document.getElementById('nFantasia').focus();
            // document.getElementById('SNF').style.visibility = "visible";
        } else {
            // document.getElementById('SNF').style.visibility = "hidden";
        }

        if(this.state.rSocial.length < 5) {
            error = true;
            document.getElementById('rSocial').focus();
            // document.getElementById('SRS').style.visibility = "visible";
        } else {
            // document.getElementById('SRS').style.visibility = "hidden";
        }

        return error;

    }

    submit = (e) => {
        e.preventDefault();
        const err = this.submitValidation();

        if(!err) {
            this.setState({
                rSocial: "",
                nFantasia: "",
                cnpj: "",
                ender: "",
                cidade: "",
                estado: "",
                tel: "",
                email: "",
            });
        }
    }
    
    render() {
        $(document).ready(function($) {
            $('#cnpj').mask('99.999.999/9999-99');
            $('#tel').mask('+55 99 9999-9999');
        });
        
        return (
            <Form horizontal>
                <FormGroup controlId="rSocial" validationState={this.typingValidation('rSocial')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    Razão Social
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="rSocial" type="text" placeholder="Razão Social" value={this.state.rSocial} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="nFantasia" validationState={this.typingValidation('nFantasia')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    Nome Fantasia
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="nFantasia" type="text" placeholder="Nome Fantasia" value={this.state.nFantasia} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="cnpj" validationState={this.typingValidation('cnpj')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    CNPJ
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="cnpj" type="text" placeholder="CNPJ" value={this.state.cnpj} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="ender" validationState={this.typingValidation('ender')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    Endereço
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="ender" type="text" placeholder="Endereço" value={this.state.ender} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="cidade" validationState={this.typingValidation('cidade')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    Cidade
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="cidade" type="text" placeholder="Cidade" value={this.state.cidade} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="estado" validationState={this.typingValidation('estado')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    Estado
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="estado" componentClass="select" value={this.state.estado} onChange={e => this.change(e)}>
                        <option value="Selecione...">Selecione...</option>
                        {this.estadosOption(this.estados)}
                    </FormControl>
                    </Col>
                </FormGroup>

                <FormGroup controlId="email" validationState={this.typingValidation('email')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    E-mail
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="email" type="email" placeholder="E-mail" value={this.state.email} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="tel" validationState={this.typingValidation('tel')}>
                    <Col componentClass={ControlLabel} sm={smL}>
                    Telefone
                    </Col>
                    <Col sm={smI}>
                    <FormControl name="tel" type="tel" placeholder="Telefone" value={this.state.tel} onChange={e => this.change(e)}/>
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={smI}>
                    <Button type="submit" onClick={e => this.submit(e)}>Confirmar Cadastro</Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}