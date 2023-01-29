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
export const CardLink = styled(Link)`
  display: block;
  height: 100%;
  img,
  .title {
    transition: all linear 0.3s;
  }
  &:hover {
    img {
      scale: 1.1;
    }
    .title {
      text-decoration: underline;
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const PostDescription = styled.div`
  font-weight: 300;
`
