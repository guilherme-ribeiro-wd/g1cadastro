import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { FormInstance } from './comps/Form';

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

    renderForm() {
        return (
            <FormInstance />
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
                    {this.renderForm()}
                </div>
                <div>
                    {this.renderFooter()}
                </div>
            </div>
        )
    }
}


ReactDOM.render(<FormInstance />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
