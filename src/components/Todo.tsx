import React, { FunctionComponent, MouseEventHandler } from 'react'
import { ITodo } from '../reducers/todo'

interface IProps extends ITodo {
  onClick: MouseEventHandler
}

const Todo: FunctionComponent<IProps> = ({ onClick, completed, task }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {task}
  </li>
)

export default Todo
