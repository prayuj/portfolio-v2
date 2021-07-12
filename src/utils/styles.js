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
    padding: 2.5em 0;
    max-width: 960px;
`
const StyledRow = styled(Row)`
    justify-content: center;
`

const StyledCol = styled(Col)`
    text-align: justify;
`

export { StyledLink, StyledSpan, AccentedIndex, StyledContainer, StyledRow, StyledCol};