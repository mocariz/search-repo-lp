import { useCallback, useEffect, useState } from 'react'

import Alert from '@mui/material/Alert'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'

import Title from 'components/Title'
import SearchField from 'components/SearchField'
import Result from 'components/Result'
import ProgressBar from 'components/ProgressBar'

import searchRepository, { TDataResponse } from 'services/gitService'
import * as S from './styles'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState<Partial<TDataResponse>>({})
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const search = useCallback(async () => {
    setIsLoading(true)
    try {
      const result = await searchRepository(searchTerm)
      updateValues(result, '', false)
    } catch (error) {
      updateValues({}, `No data found for the repository ${searchTerm}`, false)
    }
  }, [searchTerm])

  const updateValues = (
    data: Partial<TDataResponse>,
    error: string,
    loading: boolean
  ) => {
    setData(data)
    setError(error)
    setIsLoading(loading)
  }

  useEffect(() => {
    if (searchTerm) {
      search()
    } else {
      updateValues({}, '', false)
    }
  }, [searchTerm, search])

  return (
    <>
      <ProgressBar show={isLoading} />
      <S.Wrapper fixed>
        <Grid container spacing={2}>
          <S.Block item xs={12} md={6} container>
            <Grid item md={12} lg={10}>
              <Title />
            </Grid>
            <Grid item xs={12} md={9}>
              <SearchField onChange={setSearchTerm} />
            </Grid>
          </S.Block>

          <S.BlockResult item xs={12} md={6}>
            <Result data={data} key={data.id} />
          </S.BlockResult>

          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={5000}
            open={!!error}
            onClose={() => setError('')}
          >
            <Alert variant="filled" severity="error">
              {error}
            </Alert>
          </Snackbar>
        </Grid>
      </S.Wrapper>
    </>
  )
}

export default Home
