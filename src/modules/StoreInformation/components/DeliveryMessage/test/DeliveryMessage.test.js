import React from 'react'
import { create } from 'react-test-renderer'
import DeliveryMessage from '../DeliveryMessage'

describe('DeliveryMessage component', () => {
  test('Matches the snapshot', () => {
    const deliveryMessage = create(<DeliveryMessage />)
    expect(deliveryMessage.toJSON()).toMatchSnapshot()
  })
})
