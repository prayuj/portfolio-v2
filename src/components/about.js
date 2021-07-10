import { Container, Row, Col } from 'react-bootstrap';
import {StyledLink} from '../styled-components/styles'
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
`

const StyledSpan = styled.span`
    display:flex;
    align-items: center;
`

const AccentedIndex = styled.span`
    color: var(--accent-color);
    margin-right: 10px;
`

const About = ({id}) => {
    const one = <StyledSpan><h5><AccentedIndex>[1]</AccentedIndex></h5><h3>About me</h3></StyledSpan>
    const two = <p>Hello! My name is Prayuj and I am a Software Engineer and I enjoy Full Stack Development.</p>
    const three = <p>I currently work at <StyledLink target="_blank" rel="noreferrer" href="http://urls.prayuj.tech/t/cimpress" className="content-hover-link">Cimpress</StyledLink> as part of their Business subsidiary, <StyledLink target="_blank" rel="noreferrer" href="http://urls.prayuj.tech/t/np" className="content-hover-link">National Pen.</StyledLink></p>
    const four = <p>Here are a few technologies I am proficient in:</p>
    const items = [one, two, three, four]
    return (
        <StyledContainer id={id} fluid="lg">
            <Row>
                <Col style={{textAlign: 'justify'}}>
                    {items.map((item, i) => (<div>{item}</div>
                    ))}
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default About;
