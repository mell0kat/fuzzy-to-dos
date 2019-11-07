import { VisibilityFilters, IFilter, ITodoActionTypes } from '../actions'

type IVisibilityState = IFilter

const initialState: IVisibilityState = VisibilityFilters.SHOW_ALL

const visibilityFilter = (state = initialState, action: ITodoActionTypes) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
