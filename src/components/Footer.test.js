const { render, screen } = require("@testing-library/react")
import Footer from "./Footer"

test('items are present', () => {
  render(<Footer />)
  expect(screen.getByText(/Created and Designed by Samuel Preston/i)).toBeVisible
  expect(screen.getByText(/Back to Top/i)).toBeVisible
  expect(screen.getByText(/About Me/i)).toBeVisible
  expect(screen.getByText(/My Skills/i)).toBeVisible
  expect(screen.getByText(/Portfolio/i)).toBeVisible
  expect(screen.getByText(/Blog/i)).toBeVisible
  expect(screen.getByText(/Contact/i)).toBeVisible
})
