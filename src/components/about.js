import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiJquery} from 'react-icons/si'
import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol} from '../utils/styles'
import styled from 'styled-components';

const StyledBadge = styled(Badge)`
    font-size:100%;
    margin: 0.3em;
`

const About = ({id}) => {
    const one = <StyledSpan><h5><AccentedIndex>[1]</AccentedIndex></h5><h3>About me</h3></StyledSpan>
    const two = <p>Hello! My name is Prayuj and I am a Software Engineer and I enjoy Full Stack Development.</p>
    const three = <p>I currently work at <StyledLink target="_blank" rel="noreferrer" href="http://urls.prayuj.tech/t/cimpress" className="content-hover-link">Cimpress</StyledLink> as part of their Business subsidiary, <StyledLink target="_blank" rel="noreferrer" href="http://urls.prayuj.tech/t/np" className="content-hover-link">National Pen.</StyledLink></p>
    const four = <p>Here are a few technologies I am proficient in:</p>

    const technology = [
        { icon: SiJavascript, name: 'Javascript', color: '#EFD81D'},
        { icon: FaReact, name: 'React', color: '#09D8F2' },
        { icon: FaHtml5, name: 'HTML', color: '#D84924'},
        { icon: FaCss3Alt, name: 'CSS', color: '#2449D8'},
        { icon: FaNodeJs, name: 'NodeJs', color: '#6AB24D'},
        { icon: SiMongodb, name: 'Mongodb', color: '#108B4B'},
        { icon: SiJquery, name: 'jQuery', color: '#0764A4' },
        { icon: FaPython, name: 'Python', color: '#F2C53D'},
        { icon: FaJava, name: 'Java', color: '#EA2F30'}
    ]

    const five = <p style={{textAlign: 'center'}}>
        {technology.map(tech => <StyledBadge pill style={{ background: tech.color }}>
            <tech.icon /> {tech.name}
        </StyledBadge>)}
        </p>
    const items = [one, two, three, four, five]
    return (
        <StyledContainer id={id} fluid="lg">
            <StyledRow>
                <StyledCol>
                    {items.map((item, i) => (<div>{item}</div>
                    ))}
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    );
}

export default About;
