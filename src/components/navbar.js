import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
    background-color: var(--dark-color);
    @media (min-width:992px) {
        
    }
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

const toggleButtonStyle = {
    color: "var(--light-color)"
};

const Navigation = () => {
    return (
        <StyledNavbar expand="lg" collapseOnSelect={true}>
            <StyledNavbarBrand href="/" className="display-flex">
                <span>
                    <NormalHeading>prayuj</NormalHeading>
                </span>
                <span className="accent-style">
                    <AccentedHeading>.tech</AccentedHeading>
                </span>
            </StyledNavbarBrand>
            <Navbar.Toggle style={toggleButtonStyle}/>
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