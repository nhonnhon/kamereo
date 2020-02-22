import React from 'react'
import { create } from 'react-test-renderer'
import Dropdown from '../Dropdown'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const options = [
      {
        label: 'option1',
        value: 'option1',
      },
      {
        label: 'option2',
        value: 'option2',
      },
    ]
    const dropdown = create(<Dropdown options={options} />)
    expect(dropdown.toJSON()).toMatchSnapshot()
  })
})
