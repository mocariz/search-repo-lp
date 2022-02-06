import { cleanup, render } from '@testing-library/react'
import Badge from '.'

beforeEach(cleanup)

describe('<Badge />', () => {
  it('Should valid aria label', () => {
    const { getByLabelText, rerender } = render(<Badge verb="star" />)

    expect(getByLabelText('0 users star this repository')).toBeInTheDocument()

    rerender(<Badge content={0} verb="watch" />)
    expect(getByLabelText('0 users watch this repository')).toBeInTheDocument()

    rerender(<Badge content={1} verb="fork" />)
    expect(getByLabelText('1 users fork this repository')).toBeInTheDocument()
  })

  it('Should render a integer value', () => {
    const { getByText } = render(<Badge content={6000} verb="star" />)

    expect(getByText('6k')).toBeInTheDocument()
  })

  it('Should render a decimal value', () => {
    const { getByText } = render(<Badge content={6660} verb="star" />)

    expect(getByText('6.7k')).toBeInTheDocument()
  })
})
