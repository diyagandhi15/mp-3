import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    background-color: #4079a0;
    padding: 10px 0;
    width: 25%;
    height: 100vh;
    position: absolute;
    
    @media screen and (max-width: 750px) {
    width: 100%;
    height: 40px;
    position: relative;
    }
    
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
     @media screen and (max-width: 750px) {
     flex-direction: row
}
    
`;

const NavItem = styled.li`
    margin: 20px 15px;
    @media screen and (max-width: 750px) {

   

        margin: 0px 10px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        color: #dce79a;
    }
`;



function Navigation() {
    return (
        <NavbarWrapper>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/employment">Employment</NavLink></NavItem>
                <NavItem><NavLink to="/achievements">Achievements</NavLink></NavItem>
                <NavItem><NavLink to="/references">References</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
            </NavList>
        </NavbarWrapper>
    );
}

export default Navigation;