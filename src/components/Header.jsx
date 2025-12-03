import React, { useState } from "react";
import styled from "styled-components";
import Logoo from "../pages/home/home1Png/logo.png";
import LinkPng from "../pages/home/home1Png/Link.png"
import Search from "../pages/home/home1Png/Search.png"

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  width: 139px;
  height: 45px;
  align-self:center;
  margin-bottom:40px;
  top:47px;
  left:87.94px;
  border-radius:3px;

`;


const Nav = styled.nav`
  display: flex;
  margin-left: 80px;
  gap: 40px;

  @media (max-width: 830px) {
    display: none;
  }
`;

const NavGroup = styled.div`
  position: relative;
`;

const NavItem = styled.div`
  font-size: 15px;
  color:white;
  cursor: pointer;
  font-weight: 600;
  position: relative;
   font-family: "Signika", sans-serif;
  padding: 0 18px;

  color:rgba(255, 255, 255, 1);

  &::after {
    content: "•";
    position: absolute;
    right: -20px;
    font-size: 24px;
    align-self: center;
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
  top: 20px;
  left: -20px;
  width: 220px;
  background: #ffffff;
  border-radius: 16px;
  padding: 25px 20px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  gap: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
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

const Burger = styled.div`
  width: 80px;
  height: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 830px) {
    display: flex;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #111;
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
  z-index: 999;
  box-shadow: -2px 0 20px rgba(0,0,0,0.12);
`;

const MobileItem = styled.div`
  color: #111;
  font-size: 24px;
  cursor: pointer;
  font-weight: 500;
`;


const LinkPngg = styled.img`
  width: 139px;
  height: 43;
  align-self:center;
  margin-left:200px;
  margin-bottom:10px;
  top:47px;
  left:87.94px;
  border-radius:3px;
`
;

const SearchImg = styled.img`
    width:48;
    height:48;
    top:26px;
    border-radius:24px;
    align-self:center;
    
`;



export default function Header() {
  const [dropOpen, setDropOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Logo src={Logoo} />

        <Nav>
          <NavGroup
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <NavItem style={{color:"rgba(237, 221, 94, 1)"}}>HOME</NavItem>

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

          <LinkPngg src={LinkPng}/>
          <SearchImg src={Search}/>

        </Nav>

        <Burger onClick={() => setOpen(!open)}>
          <Line style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }} />
          <Line style={{ opacity: open ? "0" : "1" }} />
          <Line style={{ transform: open ? "rotate(-45deg)" : "rotate(0)" }} />
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
