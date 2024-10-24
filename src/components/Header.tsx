import styled from 'styled-components';

const HeaderWrapper = styled.header`
    color: white;
    background-color: #336282;
    width: 100%;
    padding: 5px;
    font-size: 15px;
    box-sizing: border-box;
    z-index: 1;
`;

const StyledH1 = styled.h1`
    color: #dce79a;
    margin: 0;
    text-align: left;

    @media screen and (max-width: 750px) {
        text-align: center; 
    }
`;

const StyledP = styled.p`
    margin: 0;
    text-align: left;

    @media screen and (max-width: 750px) {
        text-align: center; 
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <StyledH1> Diya Gandhi </StyledH1>
            <StyledP> My Online Resume </StyledP>
        </HeaderWrapper>
    );
}