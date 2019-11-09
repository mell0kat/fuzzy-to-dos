import styled from 'styled-components'

export default styled.button<{ disabled: boolean; forForm?: boolean }>`
  color: ${props =>
    props.disabled || props.forForm ? 'white' : props.theme.colors.fuzzyGreen};
  background-color: ${props =>
    props.disabled ? props.theme.colors.fuzzyGreen : 'transparent'};
  padding: 0.25rem 0.5rem;
  margin: 0.5rem;
  outline: none;
  border: 1px
    ${props => (props.forForm ? 'white' : props.theme.colors.fuzzyGreen)} solid;
  border-radius: 2px;
  cursor: pointer;
`
