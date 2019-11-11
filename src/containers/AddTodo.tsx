import React, { FunctionComponent, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { addTodo, ITodoActionTypes } from '../actions'
import { GlobalState } from '../reducers'
import Button from '../components/Button'
import Input from '../components/Input'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  background-color: ${props => props.theme.colors.fuzzyGreen};
  padding: 0.75rem;
  border-radius: 3px;
`

const Label = styled.label`
  align-self: flex-start;
  margin-top: 0.5rem;
`

interface IProps {
  addTodo: typeof addTodo
}

const AddTodo: FunctionComponent<IProps> = props => {
  let input: HTMLInputElement
  const [dueAt, handleDueAtChange] = useState(new Date())
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          props.addTodo(input.value, dueAt)
          input.value = ''
        }}
      >
        <Label>To-do</Label>
        <Input ref={node => (input = node)} required />
        <Label>Due date</Label>
        <DatePicker
          selected={dueAt}
          onChange={handleDueAtChange}
          customInput={<Input />}
          required
        />
        <Button type='submit' disabled={false} forForm>
          Add Todo
        </Button>
      </Form>
    </div>
  )
}

const mapStateToProps = (_state: GlobalState) => ({})

const mapDispatchToProps = (dispatch: Dispatch<ITodoActionTypes>) => ({
  addTodo: (task: string, dueAt: Date) => dispatch(addTodo(task, dueAt))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)
