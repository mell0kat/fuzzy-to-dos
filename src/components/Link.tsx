import React, { FunctionComponent, MouseEventHandler } from 'react'

interface IProps {
  onClick: MouseEventHandler
  active: boolean
}

const Link: FunctionComponent<IProps> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link
