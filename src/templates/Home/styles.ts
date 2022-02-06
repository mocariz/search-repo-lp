import styled from 'styled-components'
import { Grid } from '@mui/material'
import { device } from 'styles/device'

export const Wrapper = styled(Grid)`
  width: 80%;
  margin: auto;
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
