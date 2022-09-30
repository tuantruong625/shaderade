import { render, screen } from "@testing-library/react"
import ColorPicker from "../../../components/ColorPicker"

describe('ColorPicker', () => {
 it('renders color picker', () => {
  const mockHandleSetColor = jest.fn()
  const HEX_CODE = "#FF6900"
  
  render(<ColorPicker color={HEX_CODE} handleSetColor={mockHandleSetColor} />)

  expect(screen.getByTitle(HEX_CODE)).toBeDefined()
 })
})