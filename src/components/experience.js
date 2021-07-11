import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components'; 
import Jumbotron from 'react-bootstrap/Jumbotron'
import { useState } from 'react';
import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol } from '../styled-components/styles'

const StyledJumbotron = styled(Jumbotron)`
    background: var(--dark-color);
`

const Experience = ({id}) => {

    const experiences = [
        {
            index: 0,
            organization: 'Cimpress',
            link: 'http://urls.prayuj.tech/t/cimpress',
            designation: 'Software Engineer',
            duration: 'August 2020 - Present',
            description: [`I currently work at Cimpress’ subsidiary National Pen which is a multi-lingual, Mass Customization E-commerce platform
            operating in 20+ nations.`,
                `Noteable features I have engineered include: Developing and Reengineering of the Website Navigation, Adding User Segmentation to the Website,  
            Incoporating Product Discounts on the Website.`,
                `Various Technologies I have worked with include Magnolia, AWS, Serverlerss, NodeJs, GraphQL, Sentry, to name a few.`]
        },
        {
            index: 1,
            organization: 'Aegis School of Data Science',
            link: 'http://urls.prayuj.tech/t/aegis',
            designation: 'Data Science Intern',
            duration: 'June 2019 - August 2019',
            description: [`Developed a Job Recommendation Model for Students' Placements.`, `Recommended Jobs based on the Job Requirement Skills and Grades of Students in those Skills.`
                , `Building the model included scrapping of Jobs, their requirements, matching skills between the Job and Student.`]
        },
        {
            index: 2,
            organization: 'CaratLane',
            link: 'http://urls.prayuj.tech/t/caratlane',
            designation: 'Software Engineer Intern',
            duration: 'August 2018',
            description: [`Designed and implemented a rule validation system for orders.`]
        }
    ];

    const [key, setKey] = useState(experiences[0].index);

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
