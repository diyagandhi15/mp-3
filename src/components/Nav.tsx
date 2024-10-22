import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    background-color: #4079a0;
    padding:  10px;
    position: fixed;
    height: 100%; 
    
    @media (max-width: 750px) {
        width: 100%; 
        height: 100px; 
        position: fixed; 
        padding: 10px;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 60px 0;
    margin: 0;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start; 
    height: 100%;
    
    @media (max-width: 750px) {
        flex-direction: row; 
        align-items: center;
        justify-content: center;
        padding: 0;
    }
`;

const NavItem = styled.li`
    text-align: center;
    margin: 20px 0;

    @media queries (max-width: 750px) {
        margin: 0 15px; 
    }
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 10px 20px;
    display: block;

    &:hover {
        color: #dce79a;
    }

    @media (max-width: 750px) {
        font-size: calc(5px + 1vw); 
        padding: 5px 10px;
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