import { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol, StyledCard } from '../utils/styles'
import { projects, iconObjects } from '../utils/const';
import Card from 'react-bootstrap/Card';


const linkStyles = {
    marginRight: '15px'
}

const cardColumnStyles = {
    paddingBottom: '15px'
}

const Projects = ({ id }) => {

    return (
        <StyledContainer id={id}>
            <StyledRow>
                <StyledCol>
                    <StyledSpan><h5><AccentedIndex>[3]</AccentedIndex></h5><h3>Projects</h3></StyledSpan>
                </StyledCol>
            </StyledRow>
            <StyledRow xs={1} md={2} lg={2} xl={2}>
                {projects.map((project) =>
                    <StyledCol style={cardColumnStyles}>
                        <StyledCard>

                            {project.image ? <Card.Img variant="top" src={project.image} /> : ''}
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{project.languages}</Card.Subtitle>
                                <Card.Text>
                                    {project.desc}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">{project.links.map(linkObj =>
                                <StyledLink href={linkObj.link} target="_blank" rel="noreferrer" style={linkStyles}>
                                    <i className={iconObjects[linkObj.name]}></i>
                                </StyledLink>
                            )}</Card.Footer>
                        </StyledCard>
                    </StyledCol>)
                }
            </StyledRow>
        </StyledContainer>
    );
}

export default Projects;
