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
    h-16 bg-white dark:bg-color-gray-rgba-06 flex justify-center items-center shadow-inner
`