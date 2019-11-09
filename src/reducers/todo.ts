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

const findAndModifyTodo = (
  state: ITodoState,
  todoId: number,
  mutator: (e: ITodo) => ITodo
): ITodoState => {
  const index = state.findIndex(t => t.id === todoId)

  // It would take some shenanigans for this to happen
  if (index === -1) {
    return state
  }

  const newState = state.slice()

  newState.splice(index, 1, mutator(state[index]))

  return newState
}

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
    case 'EDIT_TODO':
      const mutator = (t: ITodo) => ({ ...t, ...action.editObj })
      return findAndModifyTodo(state, action.id, mutator)
    case 'REMOVE_TODO':
      return filter(state, (todo: ITodo) => todo.id !== action.id)
    default:
      return state
  }
}

export default todos
