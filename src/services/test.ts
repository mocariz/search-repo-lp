import { cleanup } from '@testing-library/react'
import axios from 'axios'
import searchRepository, { TDataResponse } from './gitService'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

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

beforeEach(() => {
  jest.clearAllMocks()
  cleanup()
})

describe('searchRepository', () => {
  test('success', async () => {
    mockedAxios.get.mockImplementation(() =>
      Promise.resolve({ data: mockData })
    )

    const results = await searchRepository('repo_url')

    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://api.github.com/repos/repo_url'
    )
    expect(results).toStrictEqual({
      ...mockData
    })
  })
})
