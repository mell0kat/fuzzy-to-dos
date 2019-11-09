import styled from 'styled-components'

export default styled.input`
  padding: 0.5rem;
  outline: none;
  border: none;
  border-radius: 2px;
  &:active,
  &:visited,
  &:focus {
    outline: ${props => props.theme.colors.fuzzyGreen};
  }
`
