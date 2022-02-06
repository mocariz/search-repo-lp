import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap'
import { device } from 'styles/device'

export const Logo = styled(Github)<{ withResult?: boolean }>`
  width: ${(props) => (props.withResult ? '4rem' : '9.375rem')};
  margin-top: 2rem;

  @media ${device.laptop} {
    margin-top: 6rem;
  }

  @media ${device.tablet} {
    width: ${(props) => (props.withResult ? '6.25rem' : '15.625rem')};
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.25rem;
  margin-top: 1.5rem;
  background: #fbfcff;

  border: 0.0625rem solid #f1f2f6;
  box-sizing: border-box;
  box-shadow: 0rem 0.3125rem 0.9375rem rgba(126, 136, 153, 0.3);
  border-radius: 0.25rem;

  @media ${device.tablet} {
    margin-top: 2.5rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0.3125rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;

  &:not(:first-child) {
    margin-left: 0.9375rem;
  }

  svg,
  span {
    margin-right: 0.3125rem;
  }

  @media ${device.tablet} {
    padding-bottom: 0;
  }
`

export const Description = styled.p`
  margin: 1.125rem 0;
`

export const RepoButton = styled.div`
  width: fit-content;
  margin-top: 1.125rem;
`
