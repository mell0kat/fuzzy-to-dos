import { ITodo } from '../reducers/todo'

interface IAddTodoAction {
  type: 'ADD_TODO'
  id: number
  task: string
  dueAt: Date
}

let nextTodoId = 0
export const addTodo = (task: string, dueAt: Date): IAddTodoAction => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  task,
  dueAt
})

export type IFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

interface ISetVisibilityFilterAction {
  type: 'SET_VISIBILITY_FILTER'
  filter: IFilter
}

export const setVisibilityFilter = (
  filter: IFilter
): ISetVisibilityFilterAction => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

interface IToggleTodoAction {
  type: 'TOGGLE_TODO'
  id: number
}

export const editTodo = (
  id: number,
  editObj: Partial<ITodo>
): IEditTodoAction => ({
  type: 'EDIT_TODO',
  id,
  editObj
})

interface IEditTodoAction {
  type: 'EDIT_TODO'
  id: number
  editObj: Partial<ITodo>
}

export const toggleTodo = (id: number): IToggleTodoAction => ({
  type: 'TOGGLE_TODO',
  id
})

interface IRemoveTodoAction {
  type: 'REMOVE_TODO'
  id: number
}

export const removeTodo = (id: number): IRemoveTodoAction => ({
  type: 'REMOVE_TODO',
  id
})

export type ISortByKey = 'dueAt' | 'createdAt'
interface ISortTodosAction {
  type: 'SORT_TODOS'
  by: ISortByKey
}

export const sortTodos = (by: ISortByKey): ISortTodosAction => ({
  type: 'SORT_TODOS',
  by
})

export const VisibilityFilters: {
  [key: string]: IFilter
} = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export type ITodoActionTypes =
  | IAddTodoAction
  | ISetVisibilityFilterAction
  | IToggleTodoAction
  | IEditTodoAction
  | IRemoveTodoAction
  | ISortTodosAction
