const { render, screen } = require("@testing-library/react")
import Blog from './Blog'

test('heading is visible', () => {
  render(<Blog />)

  const heading = 'Blog'
  screen.getByText(heading)
})
