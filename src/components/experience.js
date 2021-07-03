import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
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
