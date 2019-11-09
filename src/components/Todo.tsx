import React, { FunctionComponent, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { ITodo } from '../reducers/todo'
// import './CheckboxCustomStyles.scss'

interface IProps extends ITodo {
  toggleCompleted: MouseEventHandler
  removeTodo: MouseEventHandler
}

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const RemoveButton = styled.span<{ onClick: MouseEventHandler }>`
  color: ${props => props.theme.colors.fuzzyGreen};
  font-size: 2rem;
  cursor: pointer;
`

const StyledTodo = styled.li<Pick<IProps, 'completed'>>`
  background: white;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding: 1rem;
  list-style-type: none;
  margin: 1rem;
  min-width: 40%;
`

const CheckBox = styled.input``

const Todo: FunctionComponent<IProps> = ({
  toggleCompleted,
  removeTodo,
  completed,
  task
}) => (
  <FlexContainer>
    <CheckBox type='checkbox' onClick={toggleCompleted} />
    <StyledTodo completed={completed}>{task}</StyledTodo>
    <RemoveButton aria-role='button' onClick={removeTodo}>
      ×
    </RemoveButton>
  </FlexContainer>
)

export default Todo
