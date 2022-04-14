const { render, screen } = require("@testing-library/react")
import Header from './Header'

test('main heading is visible', () => {
  render(<Header />)

  const mainHeading = 'Samuel Preston'
  screen.getByText(mainHeading)
})

test('secondary header is visible', () => {
  render(<Header />)

  const secondaryHeading = 'Full-Stack Engineer'
  screen.getByText(secondaryHeading)
})
