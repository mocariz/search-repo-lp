import * as S from './styles'

interface IBadge {
  verb: 'star' | 'fork' | 'watch'
  content?: number
}

const Badge = ({ verb, content = 0 }: IBadge) => {
  const ranges = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'G' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' }
  ]

  const formatValue = () => {
    if (!content) return '0'
    const item = ranges.reverse().find((item) => {
      return content >= item.value
    })

    if (item) {
      const result = content / item.value

      if (Number.isInteger(result)) {
        return `${result.toFixed(0)}${item.symbol}`
      }
      return `${result.toFixed(1)}${item.symbol}`
    }
  }

  return (
    <S.Badge aria-label={`${content} users ${verb} this repository`}>
      {formatValue()}
    </S.Badge>
  )
}

export default Badge
