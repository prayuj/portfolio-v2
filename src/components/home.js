import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import TextLoop from "react-text-loop";
import profilePicDark from "../img/profile-mobile-darkBG.jpg";

const FullHeightContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
`

const StyledIntroCol = styled(Col)`
    text-align: left;
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const Home = ({ id }) => {

    const one = <h3>Hi,</h3>;
    const two = <h3>I am Prayuj Pillai!</h3>
    const three = <h3>I am a Software Engineer and </h3>
    const four = <h3><TextLoop interval={3000}>
        <span>a Full Stack Developer. </span>
        <span>a Tech Enthusiast. </span>
        <span>a Web Developer. </span>
    </TextLoop></h3>

    const items = [one, two, three, four]

    return (
        <FullHeightContainer id={id} fluid="lg">
            <Row xs={1} md={2}>
                <Col>
                    <img src={profilePicDark}
                        width="75%" />
                </Col>
                <StyledIntroCol>
                    {items.map((item, i) => (
                        <div>{item}</div>
                    ))}
                </StyledIntroCol>
            </Row>
        </FullHeightContainer>
    );
}

export default Home;
