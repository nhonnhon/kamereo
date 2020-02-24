import { Lang } from 'constants/language'
import Validation from '../validation'

describe('Validation', () => {
  it('Validate phone true', () => {
    const validateSources = [
      {
        checker: Validation.checkers.phone,
        value: '(000) 000-0000',
      },
    ]
    expect(Validation.getInvalidValidationFrom(validateSources)).toEqual(null)
  })

  it('Validate phone false', () => {
    const validateSources = [
      {
        checker: Validation.checkers.phone,
        value: '(000) 000 0000',
      },
    ]
    const expectResult = { message: Lang.messagePhoneFormat, title: Lang.incorrectPhoneFormat }

    expect(Validation.getInvalidValidationFrom(validateSources)).toEqual(expectResult)
  })
})
