import tw from "twin.macro";

const ButtonCore = tw.button`
    px-5 py-2 rounded
`

export const ButtonPrimary = tw(ButtonCore)`
    text-color-white bg-color-bg-btn-primary
    hover:bg-color-bg-btn-primary-hover
`