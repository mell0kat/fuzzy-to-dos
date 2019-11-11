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
  padding: 2rem 1rem;
  list-style-type: none;
  margin: 1rem;
  position: relative;
  font-size: 1.25rem;
  min-width: 40vw;
`

const CheckBox = styled.input``

const EditButton = styled.span<{ onClick: MouseEventHandler }>`
  color: ${props => props.theme.colors.fuzzyGreen};
  font-size: 1.75rem;
  transform: rotate(75deg);
  margin-right: 0.75rem;
  cursor: pointer;
`

const SaveButton = styled(Button)<{ onClick: MouseEventHandler }>`
  color: ${props => props.theme.colors.fuzzyGreen};
  margin: 0.75rem;
`

const DueDate = styled.span`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  font-size: 0.75rem;
`

const CreatedDate = styled.span`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  font-size: 0.75rem;
`

interface IProps extends ITodo {
  toggleCompleted: MouseEventHandler
  removeTodo: MouseEventHandler
  editTodo: (editObj: { task: string }) => void
}

const Todo = (props: IProps) => {
  const {
    toggleCompleted,
    editTodo,
    removeTodo,
    completed,
    task,
    dueAt,
    createdAt
  } = props
  const [editing, toggleEditing] = useState(false)
  const [todoText, handleChangeTodoText] = useState(task)

  return (
    <FlexContainer className='animated slideInUp faster'>
      {!editing && (
        <CheckBox
          type='checkbox'
          onClick={() => {
            setTimeout(toggleCompleted, 250)
          }}
        />
      )}
      {editing ? (
        <Input
          value={todoText}
          onChange={e => handleChangeTodoText(e.target.value)}
        />
      ) : (
        <StyledTodo completed={completed}>
          <DueDate>
            due{' '}
            {dueAt.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </DueDate>
          {task}
          <CreatedDate>
            created{' '}
            {createdAt.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </CreatedDate>
        </StyledTodo>
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
