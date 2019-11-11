import { delay, select, call } from 'redux-saga/effects'
import findIndex from 'lodash/findIndex'
import { ITodo } from '../reducers/todo'

if (window.JSON && !(window.JSON as any).dateParser) {
  var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/
  var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/
  ;(JSON as any).dateParser = function(key: any, value: any) {
    if (typeof value === 'string') {
      var a = reISO.exec(value)
      if (a) return new Date(value)
      a = reMsAjax.exec(value)
      if (a) {
        var b = a[1].split(/[-+,.]/)
        return new Date(b[0] ? +b[0] : 0 - +b[1])
      }
    }
    return value
  }
}

export const getStateFromLocalStorage = () => {
  const dataFromLS = localStorage.getItem('todos')
  return JSON.parse(dataFromLS, (JSON as any).dateParser)
}

const removeTodoFromLocalStorage = (id: string) => {
  const dataFromLS = localStorage.getItem('todos')
  const todos: ITodo[] = JSON.parse(dataFromLS, (JSON as any).dateParser)
  const idxToDelete = findIndex(todos, t => t.id === id)
  if (idxToDelete < 0) {
    return
  } else {
    const newTodos = JSON.stringify(
      todos.slice(0, idxToDelete).concat(todos.slice(idxToDelete + 1))
    )
    localStorage
  }
}

function* saveStateToLocalStorage() {
  const todos = yield select(state => state.todos)
  localStorage.setItem('todos', JSON.stringify(todos))
}

export function* localStorageSaga() {
  while (true) {
    yield delay(1000)
    yield call(saveStateToLocalStorage)
  }
}
