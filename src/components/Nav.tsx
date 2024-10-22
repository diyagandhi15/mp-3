import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    background-color: #4079a0;
    padding: 10px 0;
    width: 250px;
    height: 100vh;
    position: fixed;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;  
        position: relative; 
    }
    
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 750px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    }
    
`;


const NavItem = styled.li`
    margin: 35px;
    padding: 3px;
    
        @media screen and (max-width: 750px) {
            margin: 0px 7px;
        }       
    `;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 20px;

    &:hover {
        color: #dce79a;
    }

    @media screen and (max-width: 750px) {
        font-size: 10px; /* Smaller font size for smaller screens */
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