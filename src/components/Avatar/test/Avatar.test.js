import React from 'react'
import { create } from 'react-test-renderer'
import Avatar from '../Avatar'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const button = create(<Avatar color="white" size="big" />)
    expect(button.toJSON()).toMatchSnapshot()
  })
})
