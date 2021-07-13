import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
    background-color: var(--dark-color);
`;

const StyledNavLink = styled(Nav.Link)`
    color: var(--light-color) !important;
`
const StyledNavBrand = styled(Navbar.Brand)`
    color: var(--light-color) !important;
`

const Footer = () => {
    const footerIcons = [
        {
            icon: 'fab fa-linkedin-in',
            link: 'http://urls.prayuj.tech/t/linkedin'
        },
        {
            icon: 'fab fa-github',
            link: 'http://urls.prayuj.tech/t/github'
        },
        {
            icon: 'far fa-envelope',
            link: 'mailto:connect@prayuj.tech'
        }
    ]
    return (
        <StyledNavbar fixed="bottom">
            <StyledNavBrand>Reach out to me</StyledNavBrand>
            <Nav className="mr-auto">
                {footerIcons.map((icon, i) =>
                    <StyledNavLink href={icon.link} target="_blank" rel="noreferrer">
                        <i className={icon.icon}></i> </StyledNavLink>
                )}
            </Nav>
        </StyledNavbar>
    );
}
 
export default Footer;