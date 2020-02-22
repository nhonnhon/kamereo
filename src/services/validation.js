import { Lang } from 'constants/language'
import _ from 'lodash'

const checkers = {
  phone: {
    check: value => /^\(\d{3}\)\s\d{3}-\d{4}$/.test(value),
    invalidInfo: () => ({
      title: Lang.incorrectPhoneFormat,
      message: Lang.messagePhoneFormat,
    }),
  },
}

/**
 *
 * @param {*} source
 * soures is an array of validation source object
 * soure contain 3 properties 'type' 'value' 'comparevalue'
 */
function getInvalidValidationFrom(sources = []) {
  const result = _.compact(sources).find(
    ({ checker, value, compareValue }) => !checker.check(value, compareValue)
  )

  if (result) {
    const invalidInfo = result.checker.invalidInfo()
    return invalidInfo
  }

  return null
}

export default { checkers, getInvalidValidationFrom }
