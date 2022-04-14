const { render, screen } = require("@testing-library/react")
import Body from "./Body"

test('component mounts', () => {
  render(<Body />)
})
