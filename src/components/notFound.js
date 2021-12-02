import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`
const HeaderLink = styled(Link)`
    color: inherit;
    &:hover{
        color: inherit;
        text-decoration: none;
    }
`
const StyledLink = styled(Link)`
    color: var(--accent-color);
    &:hover{
        color: var(--light-color);
    }
`
const FixedNavRow = styled(Row)`
  position: sticky;
  top: 0;
  z-index: 1040;
`
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

const NotFound = () => {
    return (
    <div className="App">
        <StyledContainer>
            <FixedNavRow>
                <Col>
                    <StyledNavbar expand="lg" fixed="top" id='menu-navbar'>
                        <HeaderLink to="/">
                            <StyledNavbarBrand className="display-flex">
                                <span>
                                    <NormalHeading>prayuj</NormalHeading>
                                </span>
                                <span className="accent-style">
                                    <AccentedHeading>.tech</AccentedHeading>
                                </span>
                            </StyledNavbarBrand>
                        </HeaderLink>
                    </StyledNavbar>
                </Col>
            </FixedNavRow>
            <Row>
                <Col>
                    <h1>Page Not Found</h1>
                    <StyledLink to="/"><i class="fas fa-arrow-right"></i> Go back to {window.location.hostname}</StyledLink>
                </Col>
            </Row>
        </StyledContainer>
    </div>);
}
 
export default NotFound;