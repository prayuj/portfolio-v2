import styled from 'styled-components';
import { Container, Row, Col, Card} from 'react-bootstrap';

const StyledLink = styled.a`
    color: var(--accent-color);
    text-decoration: underline;
    &:hover{
        color: var(--light-color)
    }
`

const StyledSpan = styled.span`
    display:flex;
    align-items: center;
`

const AccentedIndex = styled.span`
    color: var(--accent-color);
    margin-right: 10px;
`

const StyledContainer = styled(Container)`
    padding: 2.5em 0;
    max-width: 960px;
`
const StyledRow = styled(Row)`
    justify-content: center;
`

const StyledCol = styled(Col)`
    text-align: justify;
`

const StyledCard = styled(Card)`
    background: var(--dark-color);
    border: 1px solid var(--accent-color);
    height: 100%;
    &:hover {
        box-shadow: 0 0 0.5em var(--light-color);
    }
`

export { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol, StyledCard};