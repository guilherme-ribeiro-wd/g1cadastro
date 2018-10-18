import React from 'react';
import { Navbar, PageHeader, NavItem, Nav} from 'react-bootstrap';

export default class NavBarHeader extends React.Component {
    render() {
        return (
            <div>
                <PageHeader id="pgH" name="header" className="cabecario">
                    Cadastro Cliente
                </PageHeader>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="#">
                            Inicio    
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Areas    
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Sair    
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}
