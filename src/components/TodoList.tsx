import React, { FunctionComponent } from 'react'
import Todo from './Todo'
import { ITodo } from '../reducers/todo'
import { toggleTodo } from '../actions'

interface IProps {
  todos: ITodo[]
  toggleTodo: typeof toggleTodo
}

const TodoList: FunctionComponent<IProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

export default TodoList
