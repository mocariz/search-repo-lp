import { ChangeEvent, KeyboardEvent, useEffect, useMemo } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import debounce from 'lodash.debounce'
import * as S from './styles'

interface IProps {
  onChange: (value: string) => void
}

const SearchField = ({ onChange }: IProps) => {
  useEffect(() => {
    return () => {
      debouncedResults.cancel()
    }
  })

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    let searchTerm = event.target.value
    const regex = new RegExp(
      `(?:git@|https://)github.com[:/](.*)${
        searchTerm.includes('.git') ? '.git' : ''
      }`,
      'g'
    )

    const result = regex.exec(searchTerm)
    if (result) {
      searchTerm = result[1]
    }

    onChange(searchTerm)
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleOnChange, 300)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.target.blur()
    }
  }

  return (
    <TextField
      id="search"
      variant="outlined"
      placeholder="Search by repository name"
      helperText="Insert the value using the format user/repo_name or the git web url"
      fullWidth
      onChange={debouncedResults}
      inputProps={{ 'data-testid': 'search-input' }}
      onKeyPress={handleOnKeyPress}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <S.SearchIcon />
          </InputAdornment>
        )
      }}
    />
  )
}

export default SearchField
