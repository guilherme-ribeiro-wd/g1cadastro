import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import update from 'immutability-helper';
// import TextField from '@material-ui/core/TextField';

var $ = require("jquery");

class HeaderNav extends React.Component {
    render() {
        return (
            <header className="cabecario">
                <h1> Cadastro Cliente </h1>
                <ul className="nav"> 
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Areas</a></li>
                    <li><a href="">Sair</a></li>
                </ul>
            </header>
        )
    }
}

class DadosCadastrais extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    state = {
        rSocial: "",
        nFantasia: "",
        cnpj: "",
        ender: "",
        cidade: "",
        estado: "",
        tel: "",
        email: "",
        rSocialError: "",
        nFantasiaError: "",
        cnpjError: "",
        enderError: "",
        cidadeError: "",
        estadoError: "",
        telError: "",
        emailError: ""
    };

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    validation() {
        let isError = false;
        const errors = {
            rSocialError: "",
            nFantasiaError: "",
            cnpjError: "",
            enderError: "",
            cidadeError: "",
            estadoError: "",
            telError: "",
            emailError: ""
        };

        if(this.state.rSocial.length <= 0) {
            isError = true;
            errors.rSocialError = "Informe o campo Razão Social";
            document.getElementById('RS').classList.add('error-input');
            document.getElementById('RS').focus();
        } else {
            document.getElementById('RS').classList.remove('error-input');
        }

        if(this.state.email.indexOf('@') === -1) {
            isError = true;
            errors.emailError = "E-mail inválido";
            document.getElementById('EM').classList.add('error-input');
            document.getElementById('EM').focus();
        } else {
            document.getElementById('EM').classList.remove('error-input');
        }
        // DEFINIR VALIDAÇÕES RESTANTES --->>>>
        this.setState(errors);
        
        // console.log(errors);
        return isError;
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            rSocialError: "",
            nFantasiaError: "",
            cnpjError: "",
            enderError: "",
            cidadeError: "",
            estadoError: "",
            telError: "",
            emailError: ""
        });
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
                rSocialError: "",
                nFantasiaError: "",
                cnpjError: "",
                enderError: "",
                cidadeError: "",
                estadoError: "",
                telError: "",
                emailError: ""
            });
        }
    }
    
    render() {
        $("#file").change(function() {
            const filename = this.file[0].name
            console.log(filename);
        });
        // ARRUMAR POSIÇÃO/STYLE DO SPAN
        return (
            <form>
                <fieldset id="idInfoEmp">
                    <legend>Informações da Empresa</legend>
                    <p>
                        <label htmlFor="">Razão Social:</label>
                        <input type="text" id="RS" name="rSocial" 
                        value={this.state.rSocial} onChange={e=> this.change(e)}/>
                        <span> {this.state.rSocialError}</span>
                    </p>
                    <p>
                        <label htmlFor="">Nome Fantasia:</label>
                        <input type="text" id="NF" name="nFantasia" 
                        value={this.state.nFantasia} onChange={e=> this.change(e)}/>
                        <span> {this.state.nFantasiaError}</span>
                    </p>
                    <p>
                        <label htmlFor="">CNPJ:</label>
                        <input type="text" id="CNPJ" name="cnpj" 
                        value={this.state.cnpj} onChange={e=> this.change(e)}/>
                        <span> {this.state.cnpjError}</span>
                    </p>
                    <p>
                        <label htmlFor="">Endereço:</label>
                        <input type="text" id="EN" name="ender" 
                        value={this.state.ender} onChange={e=> this.change(e)}/>
                        <span> {this.state.enderError}</span>
                    </p>
                    <p>
                        <label htmlFor="">Cidade:</label>
                        <input type="text" id="CI" name="cidade" 
                        value={this.state.cidade} onChange={e=> this.change(e)}/>
                        <span> {this.state.cidadeError}</span>
                    </p>
                    <p>
                        <label htmlFor="">Estado:</label>
                        <input type="text" id="ES" name="estado" 
                        value={this.state.estado} onChange={e=> this.change(e)}/>
                        <span> {this.state.estadoError}</span>
                    </p>
                    <p>
                        <label htmlFor="">Email:</label>
                        <input type="email" id="EM" name="email" 
                        value={this.state.email} onChange={e=> this.change(e)}/>
                        <span> {this.state.emailError}</span>
                    </p>
                    <p>
                        <label htmlFor="">Telefone:</label>
                        <input type="tel" id="TF" name="tel" 
                        value={this.state.tel} onChange={e=> this.change(e)}/>
                        <span> {this.state.telError}</span>
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

class Footer extends React.Component {
    render() {
        return (
            <footer>
                WORKDOC
            </footer>
        )
        
    }
}

class Cadastro extends React.Component {
    renderHeaderNav() {
        return (
            <HeaderNav />
        )
    }

    renderDadosCadastrais() {
        return (
            <DadosCadastrais />
        )
    }

    renderFooter() {
        return (
            <Footer />
        )
    }

    render() {
        return (
            <div>
                <div> 
                    {this.renderHeaderNav()}
                </div>
                <div>
                    {this.renderDadosCadastrais()}
                </div>
                <div>
                    {this.renderFooter()}
                </div>
            </div>
        )
    }
}
ReactDOM.render(<Cadastro />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();