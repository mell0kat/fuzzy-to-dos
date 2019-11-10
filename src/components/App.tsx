import React, { FunctionComponent } from 'react'
import { styledTheme } from '../'
import FilterSection from './FilterSection'
import SortSection from '../containers/SortSection'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled, {
  createGlobalStyle,
  ThemedGlobalStyledClassProps
} from 'styled-components'
import FlexColumnContainer from './FlexColumnContainer'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(
      props: ThemedGlobalStyledClassProps<{}, typeof styledTheme>
    ) => props.theme.colors.fuzzyLight};
    font-family: 'Raleway', sans-serif;
    color: ${props => props.theme.colors.fuzzyDark};
  }
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`

const SortAndFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

interface IProps {}
const App: FunctionComponent<IProps> = () => {
  return (
    <FlexColumnContainer>
      <GlobalStyle />
      <Title>My Fuzzy To-do List</Title>
      <AddTodo />
      <VisibleTodoList />
      <SortAndFilter>
        <FilterSection />
        <SortSection />
      </SortAndFilter>
    </FlexColumnContainer>
  )
}

export default App
