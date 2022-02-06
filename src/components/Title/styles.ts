import styled from 'styled-components'
import { device } from 'styles/device'

export const Title = styled.h1`
  font-weight: bold;
  color: #000;

  margin-bottom: 1.5rem;

  @media ${device.laptop} {
    margin-bottom: 3rem;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`
