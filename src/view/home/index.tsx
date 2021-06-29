import React from 'react'
import { Button, Card } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'

export const Counter: React.FC = () => {
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector((state) => {
    return JSON.stringify(state)
  })
  const dispatch = useDispatch()

  return (
    <Card>
      <div>{count}</div>
      <br />
      <Button onClick={() => dispatch(increment())} type="primary">
        Increment
      </Button>
      <Button onClick={() => dispatch(decrement())} type="primary">
        Decrement
      </Button>
    </Card>
  )
}
