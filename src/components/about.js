import { Badge } from 'react-bootstrap';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiJquery} from 'react-icons/si'
import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol} from '../utils/styles'
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

const StyledBadge = styled(Badge)`
    font-size:100%;
    margin: 0.3em;
`

const About = ({id}) => {
    const one = <StyledSpan><h5><AccentedIndex>[1]</AccentedIndex></h5><h3>About me</h3></StyledSpan>
    const two = <p>Hello! My name is Prayuj and I am a Graduate Student at <StyledLink target="_blank" rel="nofollow" href="https://urls.prayujpillai.tech/t/ladoo?message=San%20Jose%20State%20Univeristy%27s%20CS%20Page" className="content-hover-link">San Jose State Univeristy.</StyledLink></p>
    const three = <p>I worked at <StyledLink target="_blank" rel="nofollow" href="http://urls.prayujpillai.tech/t/cimpress?message=Cimpress" className="content-hover-link">Cimpress</StyledLink> as part of their Business subsidiary, <StyledLink target="_blank" rel="noreferrer" href="http://urls.prayujpillai.tech/t/np?message=National%20Pen" className="content-hover-link">National Pen.</StyledLink></p>
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
                    <Fade triggerOnce = {true}>
                        {items.map((item, i) => (<div>{item}</div>
                        ))}
                    </Fade>
                </StyledCol>
            </StyledRow>
        </StyledContainer>
    );
}

export default About;
