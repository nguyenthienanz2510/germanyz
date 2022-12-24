import tw from "twin.macro";

const ButtonCore = tw.button`
    px-5 py-2 rounded transition-all
`

export const ButtonPrimary = tw(ButtonCore)`
    text-color-text-dark bg-color-primary
    hover:opacity-90
`

export const ButtonSecondary = tw(ButtonCore)`
    text-color-text-dark bg-color-secondary
    hover:opacity-90
`