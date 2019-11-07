import { ITodoActionTypes } from '../actions'

export interface ITodo {
  task: string
  dueAt?: number
  completed: boolean
}

export interface ITodo_Read extends ITodo {
  id: number
  createdAt?: number
  updatedAt?: number
}

type ITodoState = ITodo_Read[]

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
    default:
      return state
  }
}

export default todos
