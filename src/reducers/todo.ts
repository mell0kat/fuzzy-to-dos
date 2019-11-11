import filter from 'lodash/filter'
import { ITodoActionTypes, ISortByKey } from '../actions'
import { getStateFromLocalStorage } from '../sagas'

export interface ITodo_Create {
  task: string
  dueAt?: Date
  completed: boolean
}

export interface ITodo extends ITodo_Create {
  id: string
  createdAt?: Date
  updatedAt?: Date
}

type ITodoState = ITodo[]

const initialState: ITodoState = getStateFromLocalStorage() || []

const findAndModifyTodo = (
  state: ITodoState,
  todoId: string,
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
          createdAt: new Date(),
          updatedAt: null,
          dueAt: action.dueAt
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    case 'EDIT_TODO':
      const mutator = (t: ITodo) => ({ ...t, ...action.editObj })
      return findAndModifyTodo(state, action.id, mutator)
    case 'REMOVE_TODO':
      return filter(state, (todo: ITodo) => todo.id !== action.id)
    case 'SORT_TODOS':
      const copyOfState = state.slice()
      const sortByKey: ISortByKey = action.by
      copyOfState.sort((a, b) => +a[sortByKey] - +b[sortByKey])
      return copyOfState
    default:
      return state
  }
}

export default todos
