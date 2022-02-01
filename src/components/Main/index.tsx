import * as S from './styles'
import { InputAdornment, TextField } from '@mui/material'

const Main = () => (
  <S.Wrapper>
    <S.Logo />

    <TextField
      id="outlined-basic"
      variant="outlined"
      placeholder="Search by repository name"
      helperText="Insert the value using the format user/repo_name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <S.SearchIcon />
          </InputAdornment>
        )
      }}
    />
  </S.Wrapper>
)

export default Main
