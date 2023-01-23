import Link from 'next/link'
import styled from 'styled-components'

export const NextLink = styled(Link)`
  transition: all linear 0.3s;
  &:hover,
  &.active {
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }
`
