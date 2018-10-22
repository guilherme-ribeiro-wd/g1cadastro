import React from 'react';
import {
    FormControl, FormGroup, ControlLabel, Button, Col, Form
} from 'react-bootstrap';
var $ = require("jquery");
// window.$ = window.jQuery = require('jquery');
// var mask = require('jquery-mask-plugin');
// $.mask = mask;
// window.mask = mask;
require('jquery-mask-plugin');

const smI = 4;
const smL = 2;
export default class FormInstance extends React.Component {
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
            file: "",
            imagePreviewUrl: "",
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

    removeOutline(field) {
        document.getElementById(field).style.outline = "none";
    }

    typingValidation(field) {
        
        if (field === 'rSocial') {
            if (this.state.rSocial.length > 0 && this.state.rSocial.length < 5) {
                this.removeOutline(field);
                return 'error'; 
            } else if (this.state.rSocial.length >= 5) {
                this.removeOutline(field);
                return 'success';  
            } else return null;

        }

        if (field === 'nFantasia') {
            if (this.state.nFantasia.length > 0 && this.state.nFantasia.length < 5) {
                this.removeOutline(field);
                return 'error';
            } else if (this.state.nFantasia.length >= 5) {
                this.removeOutline(field);
                return 'success'; 
            } else return null;
        }

        if (field === 'cnpj') {
            
            if (this.state.cnpj.length > 0 && this.state.cnpj.length < 18) {
                this.removeOutline(field);
                return 'error';
            } else if (this.state.cnpj.length === 18) {
                this.removeOutline(field);
                return 'success';
            } else return null;
        }
        
        if (field === 'ender') {
            if(this.state.ender.length > 0 && this.state.ender.length < 1) {    
                return 'error';
            } else if (this.state.ender >= 1) {
                this.removeOutline(field);
                return 'success'; 
            } else return null;
        }

        if (field === 'cidade') {
            if(this.state.cidade.length > 0 && this.state.cidade.length < 1) {
                return 'error';
            } else if (this.state.cidade >= 1) {
                this.removeOutline(field);
                return 'success'; 
            } else return null;
        }

        if (field === 'estado') {
            if(this.state.estado.length > 0 && this.state.estado === 'Selecione...') {
                return 'error';
            } else if (this.state.estado.length > 1) {
                this.removeOutline(field);
                return 'success';
            } else return null;
        }

        if (field === 'email') {
            if(this.state.email.length > 0 && this.checkEmail(this.state.email)){
                this.removeOutline(field);
                return 'error';
            } else if (this.state.email.length > 1) {
                this.removeOutline(field)
                return 'success'; 
            } else return null;
        }

        if (field === 'tel') {
            if(this.state.tel.length > 0 && this.state.tel.length < 16) {
                this.removeOutline(field);
                return 'error';
            } else if (this.state.tel.length === 16) {
                this.removeOutline(field)
                return 'success'; 
            } else return null;
        }
    }

    focusOutline(field) {
        document.getElementById(field).focus();
        document.getElementById(field).style.outline = "2px solid red";
    }

    submitValidation() {
        let error = false;

        if(this.state.tel.length < 16) {
            error = true;
            this.focusOutline('tel');
        }
        
        if(this.checkEmail(this.state.email)) {
            error = true;
            this.focusOutline('email');
        }
        
        if(this.state.estado === 'Selecione...' || this.state.estado.length < 1) {
            error = true;
            this.focusOutline('estado');
        }

        if(this.state.cidade < 1) {
            error = true;
            this.focusOutline('cidade');
        }

        if(this.state.ender < 1) {
            error = true;
            this.focusOutline('ender');
        }
        if(this.state.cnpj.length < 18) {
            error = true;
            this.focusOutline('cnpj');
        } 

        if(this.state.nFantasia.length < 5) {
            error = true;
            this.focusOutline('nFantasia');
        }

        if(this.state.rSocial.length < 5) {
            error = true;
            this.focusOutline('rSocial');
        }

        if(this.state.imagePreviewUrl === '') {
            error = true;
            alert('Selecione um logo da empresa!');
        }
        
        return error;
    }

    submit = (e) => {
        e.preventDefault();
        console.log(this.state);
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
                file: "",
                imagePreviewUrl: "",
            });
        }
    }

    _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        reader.readAsDataURL(file);
    }

    render() {
        $(document).ready(function($) {
            $('#cnpj').mask('99.999.999/9999-99');
            $('#tel').mask('+55 99 9999-9999');
        });

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt="logo"/>);
        } else {
            $imagePreview = (<img id="logo" src="http://www.agion-oros.eu/wp-content/uploads/2018/02/180x180.jpg" alt="logo"/>);
        }
        
        return (
            <Form horizontal>
                <fieldset id="infoEmp">
                    <legend>Dados Cadastrais</legend>
                    <FormGroup controlId="rSocial" validationState={this.typingValidation('rSocial')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        Razão Social
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="rSocial" type="text" placeholder="Razão Social" value={this.state.rSocial} onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="nFantasia" validationState={this.typingValidation('nFantasia')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        Nome Fantasia
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="nFantasia" type="text" placeholder="Nome Fantasia" value={this.state.nFantasia} onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="cnpj" validationState={this.typingValidation('cnpj')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        CNPJ
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cnpj" type="text" placeholder="CNPJ" value={this.state.cnpj} 
                        onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="ender" validationState={this.typingValidation('ender')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        Endereço
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="ender" type="text" placeholder="Endereço" value={this.state.ender} 
                        onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="cidade" validationState={this.typingValidation('cidade')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        Cidade
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="cidade" type="text" placeholder="Cidade" value={this.state.cidade} 
                        onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="estado" validationState={this.typingValidation('estado')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        Estado
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="estado" componentClass="select" value={this.state.estado} 
                        onChange={e => this.change(e)}>
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
                        <FormControl name="email" type="email" placeholder="E-mail" value={this.state.email} 
                        onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="tel" validationState={this.typingValidation('tel')}>
                        <Col componentClass={ControlLabel} sm={smL}>
                        Telefone
                        </Col>
                        <Col sm={smI}>
                        <FormControl name="tel" type="tel" placeholder="Telefone" value={this.state.tel} 
                        onChange={e => this.change(e)} autoComplete="off"/> <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        {$imagePreview}
                        <label htmlFor="pic" id="lblBtn" className="btn btn-default">Envie o logo da empresa</label>
                        <FormControl id="pic" name="logo" type="file" accept="image/*" 
                        onChange={e => this._handleImageChange(e)}/>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={smI}>
                        <Button type="submit" onClick={e => this.submit(e)}>Confirmar Cadastro</Button>
                        </Col>
                    </FormGroup>
                </fieldset>
            </Form>
        )
    }
}
