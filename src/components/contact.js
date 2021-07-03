import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    min-height: 100vh
`

const Contact = ({id}) => {
    return (
        <FullHeightContainer id={id}>
            <Row>
                <Col>Contact</Col>
                <Col>World</Col>
            </Row>
        </FullHeightContainer>
    );
}

export default Contact;