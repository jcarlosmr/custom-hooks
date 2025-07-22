import { useEffect } from 'react'
import { useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false,
  // },
]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const todosCount = todos.length

  const pendingTodosCount = todos.filter((todo) => !todo.done).length

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    }

    dispatch(action)
  }

  const handleRemoveTodo = (id) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id,
    }

    dispatch(action)
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    }

    dispatch(action)
  }

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  }
}
