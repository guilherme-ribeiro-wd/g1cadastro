import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

var $ = require("jquery");

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 150,
        position: 'relative',
        float: 'left',
        left: 10,
        display: 'inline',
        fontFamily: ['Times New Roman']
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

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

    createLabels() {
        const labelTexts = [['Razão Social:', 'rSocial'], ['Nome Fantasia:', 'nFantasia'], ['CNPJ:', 'cnpj'],                         ['Endereço:', 'ender'], ['Cidade:', 'cidade'], ['Estado:', 'estado'], 
                           ['Telefone:', 'tel'], ['E-mail:', 'email']]           
        const labels = []
        for (let i = 0; i < labelTexts.length; i++) {
            let auxSpan = `${labelTexts[i][1]}Error`;
            console.log(auxSpan);
            labels.push(<p key={i}><label htmlFor={labelTexts[i][1]}>{labelTexts[i][0]}</label><input       type="text"/><span></span></p>)
        }
        return labels
    }

    render() {
        $("#file").change(function() {
            const filename = this.file[0].name
            console.log(filename);
        });

        const { classes } = this.props;

        return (
            <form action="" method="">
                <fieldset id="idInfoEmp">
                    <legend>Informações da Empresa</legend>
                    <TextField name="rSocial" label="Razão Social" variant="outlined" margin="normal" className={classes.textField}
                    />
                    <br/>
                    <TextField name="nFantasia" label="Nome Fantasia" variant="outlined" margin="normal" className={classes.textField}
                    />
                    <br/>
                    <TextField name="cnpj" label="CNPJ" variant="outlined" margin="normal" className={classes.textField}/>
                    <br/>
                    <TextField name="ender" label="Endereço" variant="outlined" margin="normal" className={classes.textField}/>
                    <br/>
                    <TextField name="cidade" label="Cidade" variant="outlined" margin="normal" className={classes.textField}/>
                    <br/>
                    <TextField name="estado" label="Estado" variant="outlined" margin="normal" className={classes.textField}/>
                    <br/>
                    <TextField name="tel" label="Telefone" variant="outlined" margin="normal" className={classes.textField}/>
                    <br/>
                    <TextField name="email" label="Email" variant="outlined" margin="normal" className={classes.textField}/>
                    
                    <label htmlFor="file" className="btn">Envie o logo da empresa</label>
                    <input id="file" type="file" className="pic" accept="image/*"/>
                    <img src="http://placehold.it/180" alt="logo"/>
                    <button type="submit">Confirmar Cadastro</button>
                </fieldset>
            </form>
        )
    }
}

export default withStyles(styles)(DadosCadastrais);