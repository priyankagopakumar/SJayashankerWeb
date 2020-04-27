import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>  
            {/* A JSX comment */}
            <Navbar color="light" light expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">S Jayashanker</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem><NavLink href="/">Home</NavLink></NavItem>
                            <NavItem><NavLink href="/">Books</NavLink></NavItem>
                            <NavItem><NavLink href="/">In the Press</NavLink></NavItem>
                            <NavItem><NavLink href="/">Bio</NavLink></NavItem>
                            <NavItem><NavLink href="/">Awards</NavLink></NavItem>
                            <NavItem><NavLink href="/">Contact</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}

export default AppNavbar;