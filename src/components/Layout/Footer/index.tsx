import tw from "twin.macro";

const Footer = () => {
    return (
        <FooterContainer>
            Footer
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = tw.footer`
    h-16 bg-white  flex justify-center items-center shadow-inner
    dark:bg-color-bg-dark-primary
`