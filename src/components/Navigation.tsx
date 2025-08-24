import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 1rem;
  padding: 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-style: dotted;
    color: darkslateblue;
  }
`;

const CurrentLink = styled.span`
  text-decoration: underline;
  font-size: 1rem;
  padding: 1rem;
  font-weight: bold;
  color: purple;
  text-decoration-style: solid;
`;

const LineTop = styled.hr`
  border: 1px dotted grey;
`;

const LineBottom = styled.hr`
  border: 1px dotted grey;
`;

const NavLink = ({ pathname, to, ...props }) => {
  const active = pathname === to;
  return active ? (
    <CurrentLink>{props.children}</CurrentLink>
  ) : (
    <StyledLink to={to} {...props} />
  );
};

const Navigation = ({ location: { pathname } }) => (
  <div>
    <LineTop />
    <NavLink pathname={pathname} to="/">
      About Me
    </NavLink>
    <NavLink pathname={pathname} to="/artwork/">
      Artwork
    </NavLink>
    <NavLink pathname={pathname} to="/programming/">
      Programmming
    </NavLink>
    <LineBottom />
  </div>
);

export default Navigation;
