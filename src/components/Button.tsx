import styled from 'styled-components'

export default styled.button`
  color: ${props => props.theme.colors.fuzzyGreen};
  padding: 0.5rem;
  margin: 0.5rem;
  background: none;
  outline: none;
  border: 1px ${props => props.theme.colors.fuzzyGreen} solid;
  border-radius: 2px;
  cursor: pointer;
`
