import axios from 'axios'

export interface TDataResponse {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  homepage: string
  forks_count: number
  stargazers_count: number
  watchers_count: number
}

const searchRepository = async (repository: string): Promise<TDataResponse> => {
  const { data } = await axios.get(`https://api.github.com/repos/${repository}`)
  return data
}

export default searchRepository
