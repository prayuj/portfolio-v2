import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol, StyledCard } from '../utils/styles'
import { FaAngleRight } from 'react-icons/fa';
import { experiences } from '../utils/const';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Fade } from 'react-awesome-reveal';

const cardColumnStyles = {
    padding: '15px'
}

const Experience = ({id}) => {

    return (
        <StyledContainer id={id}>
            <StyledRow>
                <StyledCol>
                    <StyledSpan><h5><AccentedIndex>[2]</AccentedIndex></h5><h3>My Experience</h3></StyledSpan>
                </StyledCol>
            </StyledRow>
            <StyledRow xs={1} md={1} lg={1} xl={1}>
                {experiences.map((experience) =>
                    <StyledCol style={cardColumnStyles}>
                        <Fade triggerOnce = {true}>
                            <StyledCard>
                                <Card.Body>
                                    <Card.Title>{experience.designation} @ <StyledLink target="_blank" rel="nofollow" href={experience.link}>{experience.organization}</StyledLink></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{experience.duration}</Card.Subtitle>
                                    <Card.Text>
                                        <Container>
                                        {experience.description.map((point, index) => (
                                            <Row>
                                                <Col xs={1} md={1} lg={1} xl={1} style={{maxWidth:'1%'}}><FaAngleRight style={{color:'var(--accent-color)'}}/></Col>
                                                <Col><p>{point}</p></Col>
                                            </Row>
                                        ))}
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                            </StyledCard>
                        </Fade>
                    </StyledCol>)   
                }
            </StyledRow>
        </StyledContainer>
    );
}

export default Experience;
