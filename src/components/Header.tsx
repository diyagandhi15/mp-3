import styled from 'styled-components';

const HeaderWrapper = styled.header`
    color: white;
    background-color: #336282;
    width: 100%;
    padding: 5px;
    font-size: 15px;
    box-sizing: border-box;
`;

const StyledH1 = styled.h1`
    color: #dce79a;
    margin: 0;
    text-align: left;

    @media screen and (max-width: 750px) {
        text-align: center; /* Center align heading for smaller screens */
    }
`;

const StyledP = styled.p`
    margin: 0;
    text-align: left;

    @media screen and (max-width: 750px) {
        text-align: center; /* Center align paragraph for smaller screens */
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <StyledH1> Diya Gandhi </StyledH1>
            <StyledP> My Online Resume </StyledP>
        </HeaderWrapper>
    );
}