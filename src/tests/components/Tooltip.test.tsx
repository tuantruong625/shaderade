
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";

import Tooltip from "../../components/Tooltip"
import { adjust } from '../../helpers/index'

describe('Tooltip', () => {
 it('Copies hex code to clipboard', async () => {
  const HEX_CODE = "#FF6900"
  const SHADE = 140

  Object.assign(window.navigator, {
   clipboard: {
     writeText: jest.fn().mockImplementation(() => Promise.resolve()),
   },
  });
  
  render(<Tooltip color={HEX_CODE} shade={SHADE} />)
   
  expect(screen.getByText('Copy Hex Code')).toBeDefined()
  
  await act(async () => {
   await fireEvent.click(screen.getByText('Copy Hex Code'))
  })

  expect(window.navigator.clipboard.writeText)
    .toHaveBeenCalledWith(adjust(HEX_CODE, SHADE));
   
  expect(screen.getByText('Copied to clipboard!')).toBeDefined()
 })
})