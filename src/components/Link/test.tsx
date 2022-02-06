import { cleanup, render } from '@testing-library/react'
import Link from '.'

beforeEach(cleanup)

describe('<Link />', () => {
  it('Should render component', () => {
    const { getByText, rerender } = render(<Link url="https://reactjs.org" />)

    expect(getByText('reactjs.org')).toBeInTheDocument()

    rerender(<Link url="http://reactjs.org" />)
    expect(getByText('reactjs.org')).toBeInTheDocument()

    rerender(<Link url="www.reactjs.org" />)
    expect(getByText('reactjs.org')).toBeInTheDocument()

    rerender(<Link url="invalid_url" />)
    expect(getByText('invalid_url')).toBeInTheDocument()
  })

  it('Should render empty', () => {
    const { container } = render(<Link />)

    expect(container).toBeEmptyDOMElement()
  })
})
