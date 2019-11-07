import React, { FunctionComponent, MouseEventHandler } from 'react'
import styled from 'styled-components'
import { ITodo } from '../reducers/todo'

interface IProps extends ITodo {
  onClick: MouseEventHandler
}

const StyledTodo = styled.li<Pick<IProps, 'completed'>>`
  background: white;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding: 1rem;
`

const Todo: FunctionComponent<IProps> = ({ onClick, completed, task }) => (
  <StyledTodo onClick={onClick} completed={completed}>
    {task}
  </StyledTodo>
)

export default Todo
