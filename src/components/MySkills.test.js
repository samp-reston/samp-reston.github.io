const { render, screen } = require("@testing-library/react")
import MySkills from "./MySkills"

test('heading is visible', () => {
  render(<MySkills />)

  const heading = 'My Skills'
  screen.getByText(heading)
})
