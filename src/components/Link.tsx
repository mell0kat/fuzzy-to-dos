import React, { FunctionComponent, MouseEventHandler } from 'react'
import Button from './Button'

interface IProps {
  onClick: MouseEventHandler
  active: boolean
}

const Link: FunctionComponent<IProps> = ({ active, children, onClick }) => (
  <Button onClick={onClick} disabled={active}>
    {children}
  </Button>
)

export default Link
