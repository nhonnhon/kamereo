import React from 'react'
import { create } from 'react-test-renderer'
import Checkbox from '../Checkbox'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = create(<Checkbox />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
