import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
    background-color: #4079a0;
    padding: 10px 0;
    width: 100%;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;

    /* Responsive Styles for Screens Smaller Than 750px */
    @media screen and (max-width: 750px) {
        flex-direction: row;
        
        li {
            margin: 5px;
        }

        li a {
            padding: 5px calc(2px + 1vw); /* Adjust padding for smaller screens */
            font-size: calc(6px + 1vw); /* Dynamically adjust font size */
            white-space: nowrap; /* Ensure text stays on one line */
        }
    }
`;

const NavItem = styled.li`
    margin: 0 15px;
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