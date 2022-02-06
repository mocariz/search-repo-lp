import { act, cleanup, fireEvent, render } from '@testing-library/react'

import SearchField from '.'

const mockOnChange = jest.fn()
jest.useFakeTimers()

beforeEach(() => {
  cleanup()
  mockOnChange.mockClear()
})

describe('<SearchField />', () => {
  it('should render component', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <SearchField onChange={mockOnChange} />
    )

    expect(getByTestId('search-input')).toBeInTheDocument()
    expect(
      getByPlaceholderText('Search by repository name')
    ).toBeInTheDocument()
  })

  it('Should fire onChange', async () => {
    const { getByTestId } = render(<SearchField onChange={mockOnChange} />)

    await act(async () => {
      await fireEvent.change(getByTestId('search-input'), {
        target: { value: 'facebook/react' }
      })
      jest.runAllTimers()
    })

    expect(mockOnChange).toHaveBeenCalled()
    expect(mockOnChange).toBeCalledWith('facebook/react')
  })

  it('Should return correct value for repository web url', async () => {
    const { getByTestId } = render(<SearchField onChange={mockOnChange} />)

    await act(async () => {
      await fireEvent.change(getByTestId('search-input'), {
        target: { value: 'https://github.com/facebook/react' }
      })
      jest.runAllTimers()
    })

    expect(mockOnChange).toBeCalledWith('facebook/react')
  })

  it('Should return correct value for repository HTTPS url', async () => {
    const { getByTestId } = render(<SearchField onChange={mockOnChange} />)

    await act(async () => {
      await fireEvent.change(getByTestId('search-input'), {
        target: { value: 'https://github.com/facebook/react.git' }
      })
      jest.runAllTimers()
    })

    expect(mockOnChange).toBeCalledWith('facebook/react')
  })

  it('Should return correct value for repository SSH url', async () => {
    const { getByTestId } = render(<SearchField onChange={mockOnChange} />)

    await act(async () => {
      await fireEvent.change(getByTestId('search-input'), {
        target: { value: 'git@github.com:facebook/react.git' }
      })
      jest.runAllTimers()
    })

    expect(mockOnChange).toBeCalledWith('facebook/react')
  })

  it('Should lose focus on search field when press enter key', async () => {
    const { getByTestId } = render(<SearchField onChange={mockOnChange} />)

    await act(async () => {
      getByTestId('search-input').focus()
    })

    expect(getByTestId('search-input')).toHaveFocus()

    await act(async () => {
      fireEvent.keyPress(getByTestId('search-input'), {
        key: 'Enter',
        code: 13,
        charCode: 13
      })
    })

    expect(getByTestId('search-input')).not.toHaveFocus()
  })
})
