import styled from 'styled-components'

const ButtonCore = styled.button`
  padding: 8px 24px;
  border-radius: 100px;
  transition: all linear 0.3s;
`

export const ButtonPrimary = styled(ButtonCore)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${props => props.theme.colors.white};
  background-size: 200% auto;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.primary_sub} 0%,
    ${props => props.theme.colors.primary} 50%,
    ${props => props.theme.colors.primary_sub} 100%
  );
  &:hover {
    background-position: right center;
    scale: 1.14;
  }
`

export const ButtonSecondary = styled(ButtonCore)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: ${props => props.theme.colors.white};
  background-size: 200% auto;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.colors.secondary_sub} 0%,
    ${props => props.theme.colors.secondary} 50%,
    ${props => props.theme.colors.secondary_sub} 100%
  );
  &:hover {
    background-position: right center;
    scale: 1.14;
  }
`
