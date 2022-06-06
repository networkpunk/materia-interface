import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/logo.png"

// styles

const Header = styled.div`
  width: 100%;
  background: #171614;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -webkit-box-shadow: 0 0 4px 2px rgba(10, 10, 10, 0.5);
  -moz-box-shadow: 0 0 4px 2px rgba(10, 10, 10, 0.5);
  box-shadow: 0 0 4px 2px rgba(10, 10, 10, 0.5);
  z-index: 20;
  top: 0;
  font-family: "ProximaNova-Semibold", sans-serif;
`
const Frame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  :hover {
    cursor: pointer;
  }
`

const Logo = styled.div`
  height: 28px;
  display: flex;
  margin-left: 1rem;
`

const Nav = styled.div`
  align-items: center;
  display: flex;
`

const Link1 = styled.a`
  margin-left: 20px;
  display: block;
  position: relative;
  line-height: 30px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1em;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`

const Links = styled.div`
  margin-left: 1rem;
  display: flex;
`

const activeClassName = "ACTIVE"

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  width: fit-content;
  margin: 0 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1em;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
  }

  :hover,
  :focus {
    color: rgba(255, 255, 255, 0.75);
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.3);
  }
`

//markup
export default function NavBar() {
  return (
    <Header>
      <Frame>
        <Nav>
          <Title href="/">
            <Logo>
              <img src={logo} alt="logo" />
            </Logo>
          </Title>
          <Links>
            <StyledNavLink to={"/inventory"}>Inventory</StyledNavLink>
            <StyledNavLink to={"/exchange"}>Exchange</StyledNavLink>
          </Links>
        </Nav>
      </Frame>
    </Header>
  )
}
