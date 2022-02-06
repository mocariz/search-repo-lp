import axios from 'axios'

export interface TDataResponse {
  id: string
  name: string
  full_name: string
  html_url: string
  description: string
  forks: number
  open_issues: number
  watchers: number
}

const searchRepository = async (repository: string): Promise<TDataResponse> => {
  const { data } = await axios.get(`https://api.github.com/repos/${repository}`)
  return data
}

export default searchRepository
