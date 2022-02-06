import { cleanup, getAllByRole, render } from '@testing-library/react'
import { TDataResponse } from 'services/gitService'
import Result from '.'

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

beforeEach(cleanup)
describe('<Result />', () => {
  it('Should render big logo', () => {
    const { getByTestId } = render(<Result data={{}} />)

    expect(getByTestId('big-logo')).toBeInTheDocument()
  })

  it('Should render result card', () => {
    const { getByTestId, getByText, getByLabelText, getAllByRole } = render(
      <Result data={mockData} />
    )

    expect(getByTestId('eye-icon')).toBeInTheDocument()
    expect(getByText('Watch')).toBeInTheDocument()
    expect(
      getByLabelText(`${mockData.watchers_count} users watch this repository`)
    ).toBeInTheDocument()

    expect(getByTestId('fork-icon')).toBeInTheDocument()
    expect(getByText('Fork')).toBeInTheDocument()
    expect(
      getByLabelText(`${mockData.forks_count} users fork this repository`)
    ).toBeInTheDocument()

    expect(getByTestId('star-icon')).toBeInTheDocument()
    expect(getByText('Star')).toBeInTheDocument()
    expect(
      getByLabelText(`${mockData.stargazers_count} users star this repository`)
    ).toBeInTheDocument()

    expect(getByText(mockData.full_name)).toBeInTheDocument()
    expect(getByText(mockData.description)).toBeInTheDocument()
    expect(getAllByRole('link')[0]).toHaveAttribute('href', mockData.homepage)
    expect(getByText('go to repo')).toHaveAttribute('href', mockData.homepage)
  })
})
