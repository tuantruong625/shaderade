import { act, fireEvent, render, screen } from "@testing-library/react"
import ColorSwatch from "../../../components/ColorSwatch"
import { adjust } from "../../../helpers"

describe('ColorSwatch', () => {
 it('show and hide tooltip', () => {
  const HEX_CODE = "#FF6900"
  const SHADE = 140
  
  render(<ColorSwatch color={HEX_CODE} shade={SHADE} index={0} />)

  const colorSwatch = adjust(HEX_CODE, SHADE)
  fireEvent.mouseOver(screen.getByTitle(colorSwatch as string))
  
  expect(screen.findByText('Copy Hex Code')).toBeDefined()

  fireEvent.mouseLeave(screen.getByTitle(colorSwatch as string))

  expect(screen.queryByText('Copy Hex Code')).toBeNull()
 })

 it('Copies hex code to clipboard', async () => {
  const HEX_CODE = "#FF6900"
  const SHADE = 140
  const COLOR_SHADE = adjust(HEX_CODE, SHADE)

  Object.assign(window.navigator, {
   clipboard: {
     writeText: jest.fn().mockImplementation(() => Promise.resolve()),
   },
  });
  
  render(<ColorSwatch color={HEX_CODE} shade={SHADE} index={0} />)

  await act(async () => {
   fireEvent.click(screen.getByTitle(COLOR_SHADE as string))
  })

  expect(window.navigator.clipboard.writeText)
   .toHaveBeenCalledWith(COLOR_SHADE); 
 })
})