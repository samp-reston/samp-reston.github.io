const { render, screen } = require("@testing-library/react")
import Title from './Title'

test('once rendered, main heading is visible', () => {
  render(<Title />)

  const mainHeading = 'Samuel Preston'
  screen.getByText(mainHeading)
})
