import tw from "twin.macro";

const Header = () => {
    return (
        <HeaderContainer>
            Header
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = tw.div`
    h-16 bg-white dark:bg-color-gray-rgba-06 flex justify-center items-center shadow-inner
`