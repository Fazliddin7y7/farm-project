import React, { useState } from "react";
import styled from "styled-components";
import Logoo from "../pages/home/home1Png/logo.png";
import LinkPng from "../pages/home/home1Png/Link.png";
import Search from "../pages/home/home1Png/Search.png";

const HeaderContainer = styled.header`
  width: 100%;
  height: 90px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  gap: 40px;
  background: transparent;
  top: 0;
  z-index: 1000;
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavGroup = styled.div`
  position: relative;
`;

const NavItem = styled.div`
  font-size: 16px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-family: "Signika", sans-serif;
  position: relative;

  &::after {
    content: "•";
    position: absolute;
    right: -18px;
    top: 0;
    transform: translateY(-2px);
    font-size: 22px;
    color: #f5d142;
  }

  &:last-child::after {
    content: "";
  }

  &:hover {
    color: #f5d142;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 30px;
  left: -20px;
  width: 220px;
  background: #ffffff;
  border-radius: 16px;
  padding: 25px 20px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid #eaeaea;
  z-index: 2000;
`;

const DropItem = styled.div`
  font-size: 16px;
  color: #333;
  cursor: pointer;
  padding: 4px 0;
  transition: 0.2s;

  &:hover {
    color: #1e7a28;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
  object-fit: contain;
  cursor: pointer;
`;

const Burger = styled.div`
  width: 35px;
  height: 22px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #fff;
  transition: 0.3s;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")};
  width: 70%;
  max-width: 320px;
  height: 100vh;
  background: #ffffff;
  padding: 100px 40px;
  transition: 0.35s ease;
  display: flex;
  flex-direction: column;
  gap: 30px;
  z-index: 1100;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.12);
`;

const MobileItem = styled.div`
  color: #111;
  font-size: 24px;
  cursor: pointer;
  font-weight: 500;
`;

// ================================

export default function Header() {
  const [dropOpen, setDropOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>

        <LeftSide>
          <Logo src={Logoo} />

          <Nav>
            <NavGroup
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <NavItem style={{ color: "rgba(237, 221, 94, 1)" }}>HOME</NavItem>

              <Dropdown open={dropOpen}>
                <DropItem>HOME 1</DropItem>
                <DropItem>HOME 2</DropItem>
                <DropItem>HOME 3</DropItem>
              </Dropdown>
            </NavGroup>

            <NavItem>PAGES</NavItem>
            <NavItem>SERVICES</NavItem>
            <NavItem>PORTFOLIO</NavItem>
            <NavItem>BLOG</NavItem>
            <NavItem>CONTACT US</NavItem>
          </Nav>
        </LeftSide>

        <RightSide>
          <Icon src={LinkPng} />
          <Icon src={Search} />
        </RightSide>

        <Burger onClick={() => setOpen(!open)}>
          <Line style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }} />
          <Line style={{ opacity: open ? "0" : "1" }} />
          <Line
            style={{ transform: open ? "rotate(-45deg)" : "rotate(0)" }}
          />
        </Burger>
      </HeaderContainer>

      <MobileMenu open={open}>
        <MobileItem>HOME</MobileItem>
        <MobileItem>PAGES</MobileItem>
        <MobileItem>SERVICES</MobileItem>
        <MobileItem>PORTFOLIO</MobileItem>
        <MobileItem>BLOG</MobileItem>
        <MobileItem>CONTACT US</MobileItem>
      </MobileMenu>
    </>
  );
}
