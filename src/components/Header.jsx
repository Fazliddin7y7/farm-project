import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../routes/routes";

import Logoo from "../pages/home/home1Png/logo.png";
import LinkPng from "../pages/home/home1Png/Link.png";
import Search from "../pages/home/home1Png/Search.png";
import Dot from "../pages/home/headerPng/Dot.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: transparent;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const NavGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover > div {
    display: flex;
  }
`;

const NavItem = styled.div`
  font-size: 16px;
  color: ${({ active }) => (active ? "#f5d142" : "white")};
  cursor: pointer;
  font-weight: 600;
  font-family: "Signika", sans-serif;

  &:hover {
    color: #f5d142;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 220px;
  background: white;
  border-radius: 16px;
  padding: 25px 21px;
  display: none;
  flex-direction: column;
  gap: 18px;
  border: 1px solid #eaeaea;
  z-index: 9999;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
`;

const DropItem = styled(Link)`
  font-size: 16px;
  color: ${({ active }) => (active ? "#f5d142" : "#333")};
  text-decoration: none;

  &:hover {
    color: #f5d142;
  }
`;

const ForDot = styled.img`
  width: 6px;
  height: 6px;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Icon = styled.img`
  width: 168px;
  cursor: pointer;
`;

const Icon2 = styled.img`
  width: 48px;
  cursor: pointer;
`;

export default function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <LeftSide>
        <Link to={ROUTES.HOME1}>
          <Logo src={Logoo} />
        </Link>

        <Nav>
          {/* HOME */}
          <NavGroup>
            <NavItem active={location.pathname.includes("home")}>HOME</NavItem>
            <Dropdown>
              <DropItem to={ROUTES.HOME1}>Home 1</DropItem>
              <DropItem to={ROUTES.HOME2}>Home 2</DropItem>
              <DropItem to={ROUTES.HOME3}>Home 3</DropItem>
            </Dropdown>
          </NavGroup>

          <ForDot src={Dot} />

          {/* PAGES */}
          <NavGroup>
            <NavItem active={location.pathname.match(/about|faq|history|team/)}>PAGES</NavItem>
            <Dropdown>
              <DropItem to={ROUTES.ABOUT}>About Us</DropItem>
              <DropItem to={ROUTES.FAQ}>FAQ</DropItem>
              <DropItem to={ROUTES.HISTORY}>Our History</DropItem>
              <DropItem to={ROUTES.TEAM}>Our Team</DropItem>
              <DropItem to={ROUTES.TEAM_DETAILS}>Team Member Details</DropItem>
            </Dropdown>
          </NavGroup>

          <ForDot src={Dot} />

          {/* SERVICES */}
          <NavGroup>
            <NavItem active={location.pathname.includes("services")}>SERVICES</NavItem>
            <Dropdown>
              <DropItem to={ROUTES.SERVICES}>Services</DropItem>
              <DropItem to={ROUTES.SERVICE_DETAILS}>Service Details</DropItem>
            </Dropdown>
          </NavGroup>

          <ForDot src={Dot} />

          {/* PORTFOLIO */}
          <NavGroup>
            <NavItem active={location.pathname.includes("portfolio")}>PORTFOLIO</NavItem>
            <Dropdown>
              <DropItem to={ROUTES.PORTFOLIO_GRID2}>Portfolio Grid 2</DropItem>
              <DropItem to={ROUTES.PORTFOLIO_GRID3}>Portfolio Grid 3</DropItem>
              <DropItem to={ROUTES.PORTFOLIO_GRID4}>Portfolio Grid 4</DropItem>
            </Dropdown>
          </NavGroup>

          <ForDot src={Dot} />

          {/* BLOG */}
          <NavItem active={location.pathname === ROUTES.BLOG}>
            <Link to={ROUTES.BLOG} style={{ color: "inherit", textDecoration: "none" }}>
              BLOG
            </Link>
          </NavItem>

          <ForDot src={Dot} />

          {/* CONTACT */}
          <NavItem active={location.pathname === ROUTES.CONTACT}>
            <Link to={ROUTES.CONTACT} style={{ color: "inherit", textDecoration: "none" }}>
              CONTACT US
            </Link>
          </NavItem>
        </Nav>
      </LeftSide>

      <RightSide>
        <Icon src={LinkPng} />
        <Icon2 src={Search} />
      </RightSide>
    </HeaderContainer>
  );
}
