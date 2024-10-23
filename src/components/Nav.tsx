import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    background-color: #4079a0;
    padding: 0px 0;
    padding-top: 63px;
    width: calc(170px + 10vw);
    height: 100vh;
    margin-top: -63px;
    z-index: 0;
    position: fixed;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;  
        position: relative; 
        margin-top: 0px;
        padding-top: 10px;
        padding-bottom: 10px;

    }
    
`;

const NavList = styled.ul`
    
    padding: 0px 0px;
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
    font-size: calc(7px + 1vw);;

    &:hover {
        color: #dce79a;
    }

    @media screen and (max-width: 750px) {
            font-size: calc(2.2px + 1.5vw);;
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