import styled from 'styled-components';

const FooterWrapper = styled.footer`
    color: white;
    background-color: #336282;
    padding: 5px;
    font-size: 10px;
    text-align: left;
    position: relative; 
    bottom: 0;
    // width: 100%; 
`;

export default function Footer() {
    return (
        <FooterWrapper>
            All Rights Reserved by Diya Gandhi <a href="#">Credits</a> &copy;
        </FooterWrapper>
    );
}