import { Dispatch } from 'redux'
import React, { MouseEventHandler } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { GlobalState } from '../reducers'
import { sortTodos, ITodoActionTypes, ISortByKey } from '../actions'

const mapStateToProps = (state: GlobalState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<ITodoActionTypes>) => ({
  sortTodos: (by: ISortByKey) => dispatch(sortTodos(by))
})

interface IProps {
  sortTodos: typeof sortTodos
}

const SortSection = (props: IProps) => {
  const { sortTodos } = props
  return (
    <div>
      <span>Sort by: </span>
      <Button disabled={false} onClick={() => sortTodos('dueAt')}>
        due date
      </Button>
      <Button disabled={false} onClick={() => sortTodos('createdAt')}>
        creation time
      </Button>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortSection)
