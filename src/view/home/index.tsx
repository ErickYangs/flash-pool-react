import React from 'react'
import { Button, Card } from 'antd'
import { decrement, increment } from '../../features/counter/counterSlice'
import {useAppDispatch, useAppSelector} from "../../redux/hooks";

export const Counter: React.FC = () => {
  const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
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
