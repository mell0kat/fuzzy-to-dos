import React, { FunctionComponent } from 'react'
import Todo from './Todo'
import { ITodo } from '../reducers/todo'
import { toggleTodo, removeTodo } from '../actions'

interface IProps {
  todos: ITodo[]
  toggleTodo: typeof toggleTodo
  removeTodo: typeof removeTodo
}

const TodoList: FunctionComponent<IProps> = ({
  todos,
  toggleTodo,
  removeTodo
}) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggleCompleted={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
      />
    ))}
  </ul>
)

export default TodoList
