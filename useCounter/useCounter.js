import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = (incrementBy = 1) => {
    setCounter((current) => current + incrementBy)
  }

  const decrement = (decrementBy = 1) => {
    if (counter <= 0) return
    setCounter((current) => current - decrementBy)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return { counter, increment, decrement, reset }
}
