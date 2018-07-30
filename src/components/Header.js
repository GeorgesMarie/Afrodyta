import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

// Import Images
import logo from '../img/logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
                <div>
                    <Navbar dark expand="md" scrolling className="z-depth-0">
                        <NavbarBrand href="/">
                        <img src={logo} className="App-logo" alt="Afrodyta Logo" />
                        </NavbarBrand>
                        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                        <Collapse isOpen = { this.state.collapse } navbar>
                            <NavbarNav right>
                            <NavItem active>
                                <NavLink to="#">ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">GALLERY</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">BLOG</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">CONTACT</NavLink>
                            </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Navbar>
                </div>
        );
    }
}

export default Header;