import React, { FunctionComponent } from 'react'
import { styledTheme } from '../'
import FilterSection from './FilterSection'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {
  createGlobalStyle,
  ThemedGlobalStyledClassProps
} from 'styled-components'
import FlexColumnContainer from './FlexColumnContainer'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(
      props: ThemedGlobalStyledClassProps<{}, typeof styledTheme>
    ) => props.theme.colors.fuzzyLight};
    color: ${props => props.theme.colors.fuzzyDark};
  }
`

interface IProps {}
const App: FunctionComponent<IProps> = () => {
  return (
    <FlexColumnContainer>
      <GlobalStyle />
      <AddTodo />
      <VisibleTodoList />
      <FilterSection />
    </FlexColumnContainer>
  )
}

export default App
