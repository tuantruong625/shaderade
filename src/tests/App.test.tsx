import { render, screen, fireEvent } from "@testing-library/react"

import App from "../App"
import { adjust } from "../helpers"

describe('App', () => {
 it('sets color shades', () => {
  render(<App />)

  fireEvent.click(screen.getByTitle('#FF6900'))
  const shade = adjust('#FF6900', 10)

  expect(screen.getByTitle(shade as string)).toBeDefined()
 })
})