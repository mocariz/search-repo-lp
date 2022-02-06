import { cleanup, render } from '@testing-library/react'

import ProgressBar from '.'

beforeEach(cleanup)

describe('<ProgressBar />', () => {
  it('Should render empty component', () => {
    const { container } = render(<ProgressBar />)

    expect(container).toBeEmptyDOMElement()
  })

  it('Should render component', () => {
    const { container } = render(<ProgressBar show />)

    expect(
      container.querySelector('.MuiCircularProgress-indeterminate')
    ).toBeInTheDocument()
    expect(
      container.querySelector('.MuiLinearProgress-indeterminate')
    ).toBeInTheDocument()
  })
})
