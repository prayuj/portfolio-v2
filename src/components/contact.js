import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
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
