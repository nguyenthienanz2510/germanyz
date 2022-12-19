import tw from "twin.macro";

const Header = () => {
    return (
        <HeaderContainer>
            <p className="text-center text-color-danger bg-color-success">Header</p>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = tw.div`
    h-16 bg-primary dark:bg-color-gray-rgba-06 flex justify-center items-center shadow-inner
`