import { Link } from '@styled-icons/boxicons-regular'
import * as S from './styles'

interface IProps {
  url?: string
}

const Component = ({ url }: IProps) => {
  if (!url) return null

  const formatLink = () => {
    const regex = /(?:www\.|https?:\/\/)(.*)/g
    const result = regex.exec(url)

    if (result) {
      return result[1]
    }
    return url
  }

  return (
    <S.Link href={url} target="_blank" rel="noopener">
      <Link size={20} />
      {formatLink()}
    </S.Link>
  )
}

export default Component
