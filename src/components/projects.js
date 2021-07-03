import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
`

const Projects = ({id}) => {
    return (
        <FullHeightContainer id={id}>
            <Row>
                <Col>Projects</Col>
                <Col>World</Col>
            </Row>
        </FullHeightContainer>
    );
}

export default Projects;
