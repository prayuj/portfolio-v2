import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import TextLoop from "react-text-loop";
import profilePicDark from "../img/profile-mobile-darkBG.jpg";

const StyledContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`

const StyledIntroCol = styled(Col)`
    text-align: left;
    display:flex;
    flex-direction: column;
    justify-content: center;
`

const CustomImage = styled.img`
    width:100%;
    max-width: 315px;
    margin-bottom: .5em;
`

const Home = ({ id }) => {

    const one = <h5>Hi, My name is</h5>;
    const two = <h3>Prayuj Pillai!</h3>;
    const three = <h5>I am a Software Engineer and </h5>
    const four = <h5><TextLoop interval={3000}>
        <span>a Full Stack Developer. </span>
        <span>a Tech Enthusiast. </span>
        <span>a Web Developer. </span>
    </TextLoop></h5>

    const items = [one, two, three, four]

    return (
        <StyledContainer id={id} fluid="lg">
            <Row xs={1} md={2}>
                <Col>
                    <CustomImage src={profilePicDark} />
                </Col>
                <StyledIntroCol>
                    {items.map((item, i) => (
                        <div>{item}</div>
                    ))}
                </StyledIntroCol>
            </Row>
        </StyledContainer>
    );
}

export default Home;
