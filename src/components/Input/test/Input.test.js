import React from 'react'
import { create } from 'react-test-renderer'
import Input from '../Input'

describe('Input component', () => {
  test('Matches the snapshot', () => {
    const input = create(<Input />)
    expect(input.toJSON()).toMatchSnapshot()
  })
})
