import React, { FunctionComponent } from 'react'
import Todo from './Todo'
import { ITodo } from '../reducers/todo'
import { toggleTodo, removeTodo, editTodo } from '../actions'

interface IProps {
  todos: ITodo[]
  toggleTodo: typeof toggleTodo
  removeTodo: typeof removeTodo
  editTodo: typeof editTodo
}

const TodoList: FunctionComponent<IProps> = ({
  todos,
  toggleTodo,
  removeTodo,
  editTodo
}) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        toggleCompleted={() => toggleTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
        editTodo={editObj => editTodo(todo.id, editObj)}
      />
    ))}
  </ul>
)

export default TodoList
