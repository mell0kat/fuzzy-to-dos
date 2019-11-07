import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addTodo, ITodoActionTypes } from '../actions'
import { GlobalState } from '../reducers'
import Button from '../components/Button'
import Input from '../components/Input'

interface IProps {
  addTodo: typeof addTodo
}

const AddTodo: FunctionComponent<IProps> = props => {
  let input: HTMLInputElement

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addTodo(input.value)
          input.value = ''
        }}
      >
        <Input ref={node => (input = node)} />
        <Button type='submit'>Add Todo</Button>
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
