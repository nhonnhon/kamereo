import React from 'react'
import { create } from 'react-test-renderer'
import Checkbox from '../Checkbox'

describe('Checkbox component', () => {
  test('Matches the snapshot', () => {
    const checkbox = create(<Checkbox />)
    expect(checkbox.toJSON()).toMatchSnapshot()
  })
})
