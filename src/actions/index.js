import { Alert } from './common'
import { Lang } from 'constants/language'

import { GET_DATA_SUCCESS, SAVE_DATA_SUCCESS } from 'constants/temp'

const getData = () => {
  return dispatch => {
    dispatch({
      type: GET_DATA_SUCCESS,
      payload: {
        name: 'K.O.I The',
        address: 'Ho Tung Mau, TPHCM',
        district: 'district 1',
        city: 'city 2',
        phone: '(338) 886-9944',
        companyName: 'K.O.I The International Company',
        companyAddress: '9862 Wakehurst Avenue Arlington Heights, IL 600004',
        companyDistrict: '',
        companyCity: '',
        mst: 'P77744944',
        srcImg: '',
      },
    })
  }
}

const postData = data => {
  return dispatch => {
    Alert(Lang.saveSuccess, '', [{ text: Lang.ok }])
    dispatch({
      type: SAVE_DATA_SUCCESS,
      payload: data,
    })
  }
}

export { getData, postData }
