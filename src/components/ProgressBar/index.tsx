import LinearProgress from '@mui/material/LinearProgress'
import CircularProgress from '@mui/material/CircularProgress'
import * as S from './styles'

interface IProps {
  show?: boolean
}

const Component = ({ show }: IProps) => {
  if (!show) return null

  return (
    <S.Wrapper>
      <LinearProgress />
      <S.Box>
        <CircularProgress size={25} />
      </S.Box>
    </S.Wrapper>
  )
}

export default Component
