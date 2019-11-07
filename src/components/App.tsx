import React, { FunctionComponent } from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

interface IProps {}
const App: FunctionComponent<IProps> = () => {
  console.log('functional component')
  return (
    <div>
      <AddTodo />
      <p>HEllo!</p>
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
