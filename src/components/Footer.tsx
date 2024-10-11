import styled from 'styled-components';

// FooterWrapper for styling the footer
const FooterWrapper = styled.footer`
    color: white;
    background-color: #336282;
    padding: 5px;
    position: relative; 
    font-size: 10px;
    text-align: left; 
    
`;

export default function Footer() {
    return (
        <FooterWrapper>
            All Rights Reserved by Diya Gandhi <a href="#">Credits</a> &copy;
        </FooterWrapper>
    );
}