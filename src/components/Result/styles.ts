import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap'
import { device } from 'styles/device'
import Button from '@mui/material/Button'

export const Logo = styled(Github)`
  width: 9.375rem;
  margin-top: 2rem;

  @media ${device.laptop} {
    margin-top: 6rem;
  }

  @media ${device.tablet} {
    width: 15.625rem;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.25rem;
  margin-top: 2.5rem;
  background: #fbfcff;

  border: 0.0625rem solid #f1f2f6;
  box-sizing: border-box;
  box-shadow: 0rem 0.3125rem 0.9375rem rgba(126, 136, 153, 0.3);
  border-radius: 0.25rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0.3125rem 0;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;

  &:not(:first-child) {
    margin-left: 0.9375rem;
  }

  svg,
  span {
    margin-right: 0.3125rem;
  }
`

export const Description = styled.p`
  margin: 1.125rem 0;
`

export const RepoButton = styled(Button)`
  width: fit-content;
  margin-top: 1.125rem;
`
