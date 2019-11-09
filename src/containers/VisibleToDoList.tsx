import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { toggleTodo, removeTodo, editTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters, IFilter, ITodoActionTypes } from '../actions'
import { GlobalState } from '../reducers/'
import { ITodo } from '../reducers/todo'

const getVisibleTodos = (todos: ITodo[], filter: IFilter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state: GlobalState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch<ITodoActionTypes>) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
  editTodo: (id: number, editObj: Partial<ITodo>) =>
    dispatch(editTodo(id, editObj)),
  removeTodo: (id: number) => dispatch(removeTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
