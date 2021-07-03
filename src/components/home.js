import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FullHeightContainer = styled(Container)`
    min-height: 100vh
`

const Home = ({id}) => {
    return ( 
        <FullHeightContainer id={id}>
            <Row>
                <Col>Home</Col>
                <Col>World</Col>
            </Row>
        </FullHeightContainer>
     );
}
 
export default Home;
