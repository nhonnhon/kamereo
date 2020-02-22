import React from 'react'
import { create } from 'react-test-renderer'
import Button from '../Button'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = create(<Button color="white" size="big" />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
