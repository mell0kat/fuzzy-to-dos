import React, {
  Component,
  MouseEventHandler,
  useState,
  useEffect,
  MouseEvent,
  ChangeEvent
} from 'react'
import styled from 'styled-components'
import { ITodo } from '../reducers/todo'
import Button from './Button'
import Input from './Input'
// import './CheckboxCustomStyles.scss'

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`

const RemoveButton = styled.span<{ onClick: MouseEventHandler }>`
  color: ${props => props.theme.colors.fuzzyGreen};
  font-size: 2rem;
  cursor: pointer;
`

const StyledTodo = styled.li<Pick<IProps, 'completed'>>`
  background: white;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  padding: 1rem;
  list-style-type: none;
  margin: 1rem;
  min-width: 40%;
`

const CheckBox = styled.input``

const EditButton = styled.span<{ onClick: MouseEventHandler }>`
  color: ${props => props.theme.colors.fuzzyGreen};
  font-size: 1.5rem;
  transform: rotate(75deg);
  margin-right: 0.75rem;
  cursor: pointer;
`

const SaveButton = styled(Button)<{ onClick: MouseEventHandler }>`
  color: ${props => props.theme.colors.fuzzyGreen};
  margin: 0.75rem;
`

interface IProps extends ITodo {
  toggleCompleted: MouseEventHandler
  removeTodo: MouseEventHandler
  editTodo: (editObj: { task: string }) => void
}

const Todo = (props: IProps) => {
  const { toggleCompleted, editTodo, removeTodo, completed, task } = props
  const [editing, toggleEditing] = useState(false)
  const [todoText, handleChangeTodoText] = useState(task)

  return (
    <FlexContainer>
      {!editing && (
        <CheckBox
          type='checkbox'
          onClick={() => {
            setTimeout(toggleCompleted, 500)
          }}
        />
      )}
      {editing ? (
        <Input
          value={todoText}
          onChange={e => handleChangeTodoText(e.target.value)}
        />
      ) : (
        <StyledTodo completed={completed}>{task}</StyledTodo>
      )}
      {editing ? (
        <SaveButton
          onClick={() => {
            toggleEditing(false)
            editTodo({ task: todoText })
          }}
          disabled={false}
        >
          save
        </SaveButton>
      ) : (
        <EditButton role='button' onClick={() => toggleEditing(!editing)}>
          ✎
        </EditButton>
      )}
      {!editing && (
        <RemoveButton role='button' onClick={removeTodo}>
          ×
        </RemoveButton>
      )}
    </FlexContainer>
  )
}

export default Todo
