import { render, cleanup } from '@testing-library/react'

import Title from '.'

beforeEach(cleanup)

describe('<Title />', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Title />)

    expect(
      getByRole('heading', {
        name: /Use the field below to search for a github repository basic information/i
      })
    ).toBeInTheDocument()
  })

  it('should render the styles correctly', () => {
    const { container } = render(<Title />)

    expect(container.firstChild).toHaveStyle({
      color: '#000',
      fontWeight: 'bold'
    })
  })
})
