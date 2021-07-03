import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    min-height: 100vh
`

const About = ({id}) => {
    return (
        <FullHeightContainer id={id}>
            <Row>
                <Col>About</Col>
                <Col>World</Col>
            </Row>
        </FullHeightContainer>
    );
}

export default About;