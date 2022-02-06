import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { device } from 'styles/device'

export const Wrapper = styled(Container)`
  padding-bottom: 1rem;
`

export const Block = styled(Grid)`
  margin-top: 3rem;

  @media ${device.laptop} {
    margin-top: 8rem;
  }
`

export const BlockResult = styled(Grid)`
  text-align: center;
`
