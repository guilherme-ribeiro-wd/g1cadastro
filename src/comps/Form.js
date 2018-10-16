import React from 'react';
import { elements } from '../dom/base';
import InputMask from 'react-input-mask';

var $ = require("jquery");

export default class Form extends React.Component{
    state = {
        rSocial: "",
        nFantasia: "",
        cnpj: "",
        ender: "",
        cidade: "",
        estado: "",
        tel: "",
        email: "",
    };

    estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
                'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
                'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
                'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina',
                'São Paulo', 'Sergipe', 'Tocantins'
    ];

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    emptyField = (field) => {
        if (field.length <= 0) {return true};
        return false;
    }

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

    checkEstado = (estado) => {
        for (let i = 0; i < this.estados.length; i++) {
            if (estado === this.estados[i])
                return true;
        }
        return false;
    }

    validation() {
        let isError = false;

        if(this.emptyField(this.state.tel) || this.state.tel.length < 16) {
            isError = true;
            document.getElementById('TF').focus();
            document.getElementById('STF').style.visibility = "visible";
        } else {
            document.getElementById('STF').style.visibility = "hidden";
        }
        
        if(this.checkEmail(this.state.email)) {
            isError = true;
            document.getElementById('EM').focus();
            document.getElementById('SEM').style.visibility = "visible";
        } else {
            document.getElementById('SEM').style.visibility = "hidden";
        }
        
        if(!this.checkEstado(this.state.estado)) {
            isError = true;
            document.getElementById('ES').focus();
            document.getElementById('SES').style.visibility = "visible";
        } else {
            document.getElementById('SES').style.visibility = "hidden";
        }

        if(this.emptyField(this.state.cidade)) {
            isError = true;
            document.getElementById('CI').focus();
            document.getElementById('SCI').style.visibility = "visible";
        } else {
            document.getElementById('SCI').style.visibility = "hidden";
        }

        if(this.emptyField(this.state.ender)) {
            isError = true;
            document.getElementById('EN').focus();
            document.getElementById('SEN').style.visibility = "visible";
        } else {
            document.getElementById('SEN').style.visibility = "hidden";
        }

        if(this.emptyField(this.state.cnpj) || this.state.cnpj.length < 18) {
            isError = true;
            document.getElementById('CNPJ').focus();
            document.getElementById('SCNPJ').style.visibility = "visible";
        } else {
            document.getElementById('SCNPJ').style.visibility = "hidden";
        }

        if(this.emptyField(this.state.nFantasia) || this.state.nFantasia.length < 5) {
            isError = true;
            document.getElementById('NF').focus();
            document.getElementById('SNF').style.visibility = "visible";
        } else {
            document.getElementById('SNF').style.visibility = "hidden";
        }

        if(this.emptyField(this.state.rSocial) || this.state.rSocial.length < 5) {
            isError = true;
            document.getElementById('RS').focus();
            document.getElementById('SRS').style.visibility = "visible";
        } else {
            document.getElementById('SRS').style.visibility = "hidden";
        }

        return isError;
    };

    onSubmit = (e) => {
        e.preventDefault();
        const err = this.validation();
        // console.log(this.state);
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
    
    estadosOption(estados) {
        const options = [];
        for (let i = 0; i < estados.length; i++) {
            options.push(<option value={estados[i]}/>);
        }
        return options;
    }
    render() {
        $("#file").change(function() {
            const filename = this.file[0].name
            console.log(filename);
        });

        return (
            <form>
                <fieldset id="idInfoEmp">
                    <legend>Informações da Empresa</legend>
                    <p>
                        <label htmlFor="">Razão Social:</label>
                        <input type="text" id="RS" name="rSocial" 
                        value={this.state.rSocial} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="SRS">Razão Social inválida. Min: 5 caracteres</span>
                    </p>
                    <p>
                        <label htmlFor="">Nome Fantasia:</label>
                        <input type="text" id="NF" name="nFantasia" 
                        value={this.state.nFantasia} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="SNF">Nome Fantasia inválida. Min: 5 caracteres</span>
                        
                    </p>
                    <p>
                        <label htmlFor="">CNPJ:</label>
                        <InputMask mask="99.999.999/9999-99" maskChar="" type="text" id="CNPJ" name="cnpj" 
                        value={this.state.cnpj} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="SCNPJ">CNPJ inválido</span>
                    </p>
                    <p>
                        <label htmlFor="">Endereço:</label>
                        <input type="text" id="EN" name="ender" 
                        value={this.state.ender} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="SEN">Informe o Endereço</span>
                    </p>
                    <p>
                        <label htmlFor="">Cidade:</label>
                        <input type="text" id="CI" name="cidade" 
                        value={this.state.cidade} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="SCI">Informe a Cidade</span>
                    </p>
                    <p>
                        <label htmlFor="">Estado:</label>
                        <input id="ES" name="estado" 
                        value={this.state.estado} list="estados" onChange={e=> this.change(e)}/>
                        <br/>
                        <datalist id="estados">
                            {this.estadosOption(this.estados)};
                        </datalist>
                        <span id="SES">Estado inválido</span>
                    </p>
                    <p>
                        <label htmlFor="">Email:</label>
                        <input type="email" id="EM" name="email" 
                        value={this.state.email} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="SEM">E-mail inválido</span>
                    </p>
                    <p>
                        <label htmlFor="">Telefone:</label>
                        <InputMask mask="+5\5 99 9999-9999" maskChar="" type="tel" id="TF" name="tel" 
                        value={this.state.tel} onChange={e=> this.change(e)}/>
                        <br/>
                        <span id="STF">Telefone inválido</span>
                    </p>
                    <label htmlFor="file" className="btn">Envie o logo da empresa</label>
                    <input id="file" type="file" className="pic" accept="image/*"/>
                    <img src="http://placehold.it/180" alt="logo"/>
                    <button type="submit" onClick={e => this.onSubmit(e)}>Confirmar Cadastro</button>
                </fieldset>
            </form>
        )
    }
}