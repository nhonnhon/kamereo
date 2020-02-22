import React from 'react'
import { create } from 'react-test-renderer'
import Input from '../Input'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = create(<Input />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
