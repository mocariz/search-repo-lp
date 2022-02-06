import { TDataResponse } from 'services/gitService'

import { GitRepoForked } from '@styled-icons/boxicons-regular'
import { Star, Eye } from '@styled-icons/bootstrap'

import MuiLink from '@mui/material/Link'
import Button from '@mui/material/Button'

import Badge from 'components/Badge'
import Link from 'components/Link'
import * as S from './styles'

interface IProps {
  data: Partial<TDataResponse>
}

const Component = ({ data }: IProps) => {
  if (!data.id) {
    return <S.Logo data-testid="big-logo" />
  }

  return (
    <>
      <S.Logo withResult />
      <S.Card>
        <S.Wrapper>
          <S.Box>
            <Eye size={20} data-testid="eye-icon" />
            <span>Watch</span>
            <Badge content={data.watchers_count} verb="watch" />
          </S.Box>
          <S.Box>
            <GitRepoForked size={20} data-testid="fork-icon" />
            <span>Fork</span>
            <Badge content={data.forks_count} verb="fork" />
          </S.Box>
          <S.Box>
            <Star size={20} data-testid="star-icon" />
            <span>Star</span>
            <Badge content={data.stargazers_count} verb="star" />
          </S.Box>
        </S.Wrapper>

        <h2>{data.full_name}</h2>

        <S.Description>{data.description}</S.Description>

        <Link url={data.homepage} />

        <S.RepoButton>
          <Button
            component={MuiLink}
            variant="contained"
            href={data.html_url}
            target="_blank"
            rel="noopener"
          >
            go to repo
          </Button>
        </S.RepoButton>
      </S.Card>
    </>
  )
}

export default Component
