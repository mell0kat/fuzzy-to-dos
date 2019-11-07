import { Dispatch } from 'redux'
import { PropsWithChildren } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, IFilter } from '../actions'
import Link from '../components/Link'
import { GlobalState } from '../reducers'
import { ITodoActionTypes } from '../actions'

type IOwnProps = PropsWithChildren<{
  filter: IFilter
}>

const mapStateToProps = (state: GlobalState, ownProps: IOwnProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (
  dispatch: Dispatch<ITodoActionTypes>,
  ownProps: IOwnProps
) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
