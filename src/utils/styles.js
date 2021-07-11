import styled from 'styled-components';
import { Container, Row, Col} from 'react-bootstrap';

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
    display:flex;
    align-items: center;
    justify-content: center;
    padding-top: 5em;
`
const StyledRow = styled(Row)`
    width: 100%;
`

const StyledCol = styled(Col)`
    text-align: justify;
`

export { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol};