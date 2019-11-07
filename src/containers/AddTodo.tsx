import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo, ITodoActionTypes } from '../actions'
import { GlobalState } from '../reducers'

const AddTodo = () => {
  let input: HTMLInputElement

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

const mapStateToProps = (_state: GlobalState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<ITodoActionTypes>) => ({
  addTodo: (task: string) => dispatch(addTodo(task))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
