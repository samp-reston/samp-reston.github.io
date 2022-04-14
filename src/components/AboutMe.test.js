const { render, screen } = require("@testing-library/react")
import AboutMe from "./AboutMe"

test('heading is visible', () => {
  render(<AboutMe />)

  const heading = 'About Me'
  screen.getByText(heading)
})
