import { adjust } from "../../helpers"

describe('helpers', () => {
 describe('adjust', () => {
  const HEX_CODE = '#0B7285'
  it('converts hex to different shade', () => {
   const result = adjust(HEX_CODE, 10)
   expect(result).toEqual('#157C8F')
  })

  it('returns undefined if no color is provided', () => {
   const result = adjust()
   expect(result).toBeUndefined()
  })

  it('when no shade is provided hex code is unchanged', () => {
   const result = adjust(HEX_CODE)
   expect(result).toEqual(HEX_CODE)
  })
 })
})