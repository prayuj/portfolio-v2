import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { useState } from 'react'

const StyledNavbar = styled(Navbar)`
    background-color: var(--dark-color);
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
    display:flex;
`;

const AccentedHeading = styled.h2`
    font-family: 'Saira', sans-serif;
    font-weight: 900;
    color: var(--accent-color);
`

const NormalHeading = styled.h2`
    font-family: 'Saira', sans-serif;
    font-weight: 900;
    color: var(--light-color);
`

const StyledNavLink = styled(Nav.Link)`
    color: var(--light-color) !important;
`

const Navigation = () => {
    const [expanded, toggleExpanded] = useState(false);

    const handleMenuToggle = () => {
        toggleExpanded(!expanded);
        document.getElementById("animated-icon").classList.toggle('open');
        document.getElementById("main-content").classList.toggle('fade-content');
        document.getElementById("overlay-content").classList.toggle('disable-website');
    }

    return (
        <StyledNavbar expand="lg" fixed="top" expanded={expanded} id='menu-navbar' onSelect={handleMenuToggle }>
            <StyledNavbarBrand href="/" className="display-flex">
                <span>
                    <NormalHeading>prayuj</NormalHeading>
                </span>
                <span className="accent-style">
                    <AccentedHeading>.tech</AccentedHeading>
                </span>
            </StyledNavbarBrand>
            <button class="navbar-toggler second-button" onClick={handleMenuToggle}>
                <div id="animated-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <StyledNavLink href="#home">Home</StyledNavLink>
                    <StyledNavLink href="#about">About</StyledNavLink>
                    <StyledNavLink href="#experience">Experience</StyledNavLink>
                    <StyledNavLink href="#projects">Projects</StyledNavLink>
                    <StyledNavLink href="#contact">Contact</StyledNavLink>
                </Nav>
            </Navbar.Collapse>
        </StyledNavbar>
    );
}

export default Navigation;
