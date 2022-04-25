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
            link: 'https://urls.prayujpillai.tech/t/linkedin?message=LinkedIn'
        },
        {
            icon: 'fab fa-github',
            link: 'https://urls.prayujpillai.tech/t/github?message=Github'
        },
        {
            icon: 'far fa-envelope',
            link: 'mailto:prayuj@gmail.com'
        }
    ]
    return (
        <StyledNavbar fixed="bottom">
            <StyledNavBrand>Reach out to me</StyledNavBrand>
            <Nav className="mr-auto">
                {footerIcons.map((icon, i) =>
                    <StyledNavLink href={icon.link} target="_blank" rel="nofollow">
                        <i className={icon.icon}></i> </StyledNavLink>
                )}
            </Nav>
        </StyledNavbar>
    );
}
 
export default Footer;