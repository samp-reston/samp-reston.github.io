const { render, screen } = require("@testing-library/react")
import Portfolio from './Portfolio'

test('heading is visible', () => {
  render(<Portfolio />)

  const heading = 'Portfolio'
  screen.getByText(heading)
})
