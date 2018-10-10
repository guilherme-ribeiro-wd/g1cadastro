import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

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
    createLabels() {
        const labelTexts = [['Razão Social:', 'rSocial'], ['Nome Fantasia:', 'nFantasia'], ['CNPJ:', 'cnpj'],                         ['Endereço:', 'ender'], ['Cidade:', 'cidade'], ['Estado:', 'estado'], 
                           ['Telefone:', 'tel'], ['E-mail:', 'email']]           
        const labels = []
        for (let i = 0; i < labelTexts.length; i++) {
            labels.push(<p key={i}><label htmlFor={labelTexts[i][1]}>{labelTexts[i][0]}</label><input type="text"/></p>)
        }
        return labels
    }

    render() {
        $("#file").change(function() {
            const filename = this.file[0].name
            console.log(filename);
        });

        return (
            <form action="" method="">
                <fieldset id="idInfoEmp">
                    <legend>Informações da Empresa</legend>
                    {this.createLabels()}
                    <label htmlFor="file" className="btn">Envie o logo da empresa</label>
                    <input id="file" type="file" className="pic" accept="image/*"/>
                    <img src="http://placehold.it/180" alt="logo"/>
                    <button type="submit">Confirmar Cadastro</button>
                </fieldset>
            </form>
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

    render() {
        return (
            <div>
                <div> 
                    {this.renderHeaderNav()}
                </div>
                <div>
                    {this.renderDadosCadastrais()}
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
