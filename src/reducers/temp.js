import { GET_DATA_SUCCESS, SAVE_DATA_SUCCESS } from 'constants/temp'

const initialState = {
  data: {
    name: '',
    address: '',
    district: '',
    city: '',
    phone: '',
    companyName: '',
    companyAddress: '',
    companyDistrict: '',
    companyCity: '',
    mst: '',
    srcImg: '',
  },
}

export default function temp(state = initialState, { type, payload, error }) {
  switch (type) {
    case GET_DATA_SUCCESS:
      return { ...state, data: payload }

    case SAVE_DATA_SUCCESS:
      return { ...state, data: payload }

    default:
      return state
  }
}
