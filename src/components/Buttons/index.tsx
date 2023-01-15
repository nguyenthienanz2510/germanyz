import tw, { styled } from 'twin.macro'

const ButtonCore = tw.button`
    px-6 py-2 rounded-3xl transition-all duration-500
`

export const ButtonPrimary = styled(ButtonCore)`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  ${tw`text-color-white`}
`

export const ButtonSecondary = styled(ButtonCore)`
box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
${tw`text-color-white`}
`