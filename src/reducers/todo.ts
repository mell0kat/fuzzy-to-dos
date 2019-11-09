import filter from 'lodash/filter'
import { ITodoActionTypes } from '../actions'

export interface ITodo_Create {
  task: string
  dueAt?: number
  completed: boolean
}

export interface ITodo extends ITodo_Create {
  id: number
  createdAt?: number
  updatedAt?: number
}

type ITodoState = ITodo[]

const initialState: ITodoState = []

const todos = (state = initialState, action: ITodoActionTypes): ITodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          completed: false,
          createdAt: Date.now(),
          updatedAt: null,
          dueAt: null
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed, updatedAt: Date.now() }
          : todo
      )
    case 'REMOVE_TODO':
      return filter(state, (todo: ITodo) => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
