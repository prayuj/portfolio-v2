import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
`

const Experience = ({id}) => {
    return (
        <FullHeightContainer id={id}>
            <Row>
                <Col>Experience</Col>
                <Col>World</Col>
            </Row>
        </FullHeightContainer>
    );
}

export default Experience;
