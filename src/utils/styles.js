import styled from 'styled-components';
import { Container, Row, Col, Card} from 'react-bootstrap';

const StyledLink = styled.a`
    color: var(--accent-color);
    &:hover{
        color: var(--light-color)
    }
    i {
        transform: scale(1.2);
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
    padding-top: 75px;
    max-width: 960px;
    border-bottom: .5px solid var(--dark);
`
const StyledRow = styled(Row)`
    justify-content: center;
`

const StyledCol = styled(Col)`
    text-align: left;
`

const StyledCard = styled(Card)`
    background: var(--dark-color);
    border-radius: 25px;
    height: 100%;
    &:hover {
        box-shadow: 0 0 1.0em var(--accent-color);
    }
`

export { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol, StyledCard};