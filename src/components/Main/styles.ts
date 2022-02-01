import styled from 'styled-components'
import { Github } from '@styled-icons/bootstrap'
import { Search } from '@styled-icons/boxicons-regular'

export const Wrapper = styled.main`
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled(Github)`
  width: 15.625rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
`

export const SearchIcon = styled(Search)`
  width: 1.25rem;
`
