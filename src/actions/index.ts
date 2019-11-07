interface IAddTodoAction {
  type: 'ADD_TODO'
  id: number
  task: string
}

let nextTodoId = 0
export const addTodo = (task: string): IAddTodoAction => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  task
})

export type IFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

interface ISetVisibilityFilterAction {
  type: 'SET_VISIBILITY_FILTER'
  filter: IFilter
}

export const setVisibilityFilter = (
  filter: 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'
): ISetVisibilityFilterAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

interface IToggleTodoAction {
  type: 'TOGGLE_TODO'
  id: number
}

export const toggleTodo = (id: number): IToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export type ITodoActionTypes =
  | IAddTodoAction
  | ISetVisibilityFilterAction
  | IToggleTodoAction
