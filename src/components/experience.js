import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'; 
import Jumbotron from 'react-bootstrap/Jumbotron';
import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol } from '../utils/styles'
import { experiences } from '../utils/const'

const StyledJumbotron = styled(Jumbotron)`
    background: var(--dark-color);
`

const Experience = ({id}) => {

    return (
        <StyledContainer id={id}>
            <StyledRow>
                <StyledCol>
                    <StyledSpan><h5><AccentedIndex>[2]</AccentedIndex></h5><h3>My Experience</h3></StyledSpan>
                    {experiences.map((experience)=>
                        <StyledJumbotron fluid>
                            <Container>
                                <h4><StyledLink target="_blank" rel="noreferrer" href={experience.link}>{experience.organization}</StyledLink></h4>
                                <h5>{experience.designation} </h5>
                                <h6>{experience.duration}</h6>
                                <ul>
                                    {experience.description.map((point, index) => (
                                        <li className="display-flex">
                                            <p>{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </Container>
                        </StyledJumbotron>
                    )}
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    );
}

export default Experience;
