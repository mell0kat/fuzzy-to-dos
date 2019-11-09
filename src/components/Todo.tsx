import React, { FunctionComponent, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { ITodo } from '../reducers/todo'

interface IProps extends ITodo {
  onClick: MouseEventHandler
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

const Todo: FunctionComponent<IProps> = ({
  onClick,
  removeTodo,
  completed,
  task
}) => (
  <FlexContainer>
    <RemoveButton onClick={removeTodo}>×</RemoveButton>
    <StyledTodo onClick={onClick} completed={completed}>
      {task}
    </StyledTodo>
  </FlexContainer>
)

export default Todo
