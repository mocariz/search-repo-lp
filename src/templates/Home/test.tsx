import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { TDataResponse } from 'services/gitService'
import Home from '.'

const mockData: TDataResponse = {
  id: 10270250,
  name: 'react',
  full_name: 'facebook/react',
  html_url: 'https://github.com/facebook/react',
  description:
    'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
  homepage: 'https://reactjs.org',
  watchers_count: 181913,
  forks_count: 37055,
  stargazers_count: 181913
}

const mockGet = jest.fn()
jest.mock('services/gitService', () => {
  const searchRepository = (value: string) => {
    return new Promise((resolve, reject) => {
      mockGet(value)
      if (value === 'invalid_repo') {
        reject({ error: 'Invalid repo url' })
      } else {
        resolve(mockData)
      }
    })
  }

  return {
    __esModule: true, // this property makes it work
    default: searchRepository,
    TDataResponse: {}
  }
})

jest.useFakeTimers()

beforeEach(() => {
  cleanup()
  jest.clearAllMocks()
})

describe('<Home />', () => {
  it('Should render component', () => {
    const { getByRole, getByTestId } = render(<Home />)

    expect(
      getByRole('heading', {
        name: /Use the field below to search for a github repository basic information/i
      })
    ).toBeInTheDocument()
    expect(getByTestId('search-input')).toBeInTheDocument()
    expect(getByTestId('big-logo')).toBeInTheDocument()
  })

  it('Should fire searchRepository action', async () => {
    const { getByTestId, queryByTestId } = render(<Home />)

    await act(async () => {
      await fireEvent.change(getByTestId('search-input'), {
        target: { value: 'facebook/react' }
      })
      jest.runAllTimers()
    })

    expect(mockGet).toBeCalledWith('facebook/react')
    expect(mockGet).toBeCalledTimes(1)
    expect(queryByTestId('big-logo')).toBeNull()
  })

  it('Should fire searchRepository action with reject', async () => {
    const { getByTestId, container } = render(<Home />)

    await act(async () => {
      await fireEvent.change(getByTestId('search-input'), {
        target: { value: 'invalid_repo' }
      })
      jest.runAllTimers()
    })

    expect(mockGet).toBeCalledTimes(1)
    expect(getByTestId('big-logo')).toBeInTheDocument()
    expect(container.querySelector('.MuiAlert-filled')?.textContent).toBe(
      'No data found for the repository invalid_repo'
    )
  })
})
