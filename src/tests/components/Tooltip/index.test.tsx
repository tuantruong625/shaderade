import { render, screen } from "@testing-library/react"
import Tooltip from "../../../components/Tooltip"

describe('Tooltip', () => {
  it('renders button copy', () => {
    render(<Tooltip buttonCopy="Foobar" />)
   
    expect(screen.getByText('Foobar')).toBeDefined()
  })  
})