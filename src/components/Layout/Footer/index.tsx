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
    h-16 bg-color-bg-dark-header flex justify-center items-center
`