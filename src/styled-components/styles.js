import styled from 'styled-components';

const StyledLink = styled.a`
    color: var(--accent-color);
    text-decoration: underline;
    &:hover{
        color: var(--light-color)
    }
`

export {StyledLink};