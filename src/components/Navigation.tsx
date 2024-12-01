import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
    font-size: 1rem;
    padding: 1rem;
    text-decoration: none;
    color: black;

    &:hover {
        font-weight: bold;
    }
`;

const CurrentLink = styled.span`
    font-size: 1rem;
    padding: 1rem;
    font-weight: bold;
    color: purple;
`;

const NavLink = ({ pathname, to, ...props }) => {
    const active = pathname === to;
    return active ? <CurrentLink>{ props.children }</CurrentLink> : <StyledLink to={to} {...props } />
};

const Navigation = ({ location : { pathname } }) => (
    <div>
      <NavLink pathname={pathname} to="/">About Me</NavLink>
      <NavLink pathname={pathname} to="/artwork/">Artwork</NavLink>
      <NavLink pathname={pathname} to="/programming/">Programmming</NavLink>
      <hr />
    </div>
)

export default Navigation;
