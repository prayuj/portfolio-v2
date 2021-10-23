import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import TextLoop from "react-text-loop";
import profilePic from "../img/profile-pic.webp";
import LazyLoad from 'react-lazyload'; 
import { Fade } from 'react-awesome-reveal';

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
    border-radius: 30%;
    max-width: 200px;
    margin-bottom: 1.5em;
    @media (min-width:992px) {
        max-width: 300px;
        margin-bottom: 0;
    }
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
                    <LazyLoad>
                        <CustomImage src={profilePic} />
                    </LazyLoad>
                </Col>
                <StyledIntroCol>
                    <Fade triggerOnce = {true} bottom>
                        {items.map((item, i) => (
                            <div>{item}</div>
                        ))}
                    </Fade>
                </StyledIntroCol>
            </Row>
        </StyledContainer>
    );
}

export default Home;
