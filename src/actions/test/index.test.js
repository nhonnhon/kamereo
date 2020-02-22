import * as actions from '../index'
import { GET_DATA_SUCCESS, SAVE_DATA_SUCCESS } from 'constants/temp'

describe('Home page action', () => {
  it('Get data', () => {
    const expectedAction = {
      type: GET_DATA_SUCCESS,
    }

    expect(actions.getData()).toEqual(expectedAction)
  })

  it('Post data', () => {
    const payload = {
      name: 'K.O.I The',
    }

    const expectedAction = {
      type: SAVE_DATA_SUCCESS,
      payload,
    }

    expect(actions.postData()).toEqual(expectedAction)
  })
})
