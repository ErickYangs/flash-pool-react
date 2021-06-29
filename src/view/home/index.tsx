import React, { useEffect, useState } from 'react'
import { Button, Card, Input, Row, Col } from 'antd'
import {
  decrement,
  increment,
  selectCount,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  countStatus,
} from '../../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

export const Counter: React.FC = () => {
  const count = useAppSelector(selectCount)
  const buttonStatus = useAppSelector(countStatus)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')
  const incrementValue = Number(incrementAmount) || 0

  useEffect(() => {
    console.log('buttonStatus', buttonStatus)
  }, [buttonStatus])
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
      <div>
        <Row>
          <Col span={12}>
            <Input
              onChange={(event) => setIncrementAmount(event.target.value)}
            />
          </Col>
          <Col span={12}>
            <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>
              Add Amount
            </Button>
            <Button
              loading={buttonStatus === 'loading'}
              onClick={() => dispatch(incrementAsync(incrementValue))}
            >
              Add Async
            </Button>
            <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
              Add if odd
            </Button>
          </Col>
        </Row>
      </div>
    </Card>
  )
}
