import React from 'react';
import {
    FormControl, FormGroup, ControlLabel, HelpBlock
} from 'react-bootstrap';

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export const FormInstance =  (
    <form>
        <FieldGroup id="FormControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
        />
    </form>
);
// export default class BootstrapForm extends React.Component{
//     constructor(props, context) {
//         super(props, context);
//         this.handleChange = this.handleChange.bind(this);

//         this.state = {
//             value: '',
//         };
//     }

//     getValidationState() {
//         const length = this.state.value.length;
//         if (length > 10) return 'success';
//         else if (length > 5) return 'warning';
//         else if (length > 0) return 'error';
//         return null;
//     }

//     handleChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//     }
    
//     render() {
//         return (
//             <form>
//                 <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
//                     <ControlLabel>Working example with validation</ControlLabel>
//                     <FormControl name="value" type="text" value={this.state.value} 
//                     placeholder="Enter text" onChange={ e => this.handleChange(e)} />
//                     <FormControl.Feedback/>
//                     <HelpBlock>Validation is based on string length.</HelpBlock>
//                 </FormGroup>
//             </form>
//         )
//     }
// }
