import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ROUTES from "../routes/routes";

import SearchIcon from "../pages/home/headerPng/SearchGreen.png";
import Dot from "../pages/home/headerPng/Dot.png";
import Logoo from "../pages/home/headerPng/PhoneGreen.png";
import FlyImg from "../pages/home/headerPng/Fly.png";
import Logo2 from "../pages/home/footerPng/logoo.png";

export default function HeaderHome3() {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimeout = useRef(null);

  const openWithDelay = (name) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(name);
  };

  const closeWithDelay = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
    }, 250); // dropdown 0.25s dan keyin yopiladi
  };

  return (
    <HeaderBox2>
      <Left2>
        <img className="logo" src={Logo2} alt="Logo" />

        <Nav2>
          {/* HOME DROPDOWN */}
          <DropdownWrapper2
            onMouseEnter={() => openWithDelay("home")}
            onMouseLeave={closeWithDelay}
          >
            <LinkItem2>HOME</LinkItem2>
            {openMenu === "home" && (
              <Dropdown2>
                <DropLink2 to={ROUTES.HOME1}>Home 1</DropLink2>
                <DropLink2 to={ROUTES.HOME2}>Home 2</DropLink2>
                <DropLink2 to={ROUTES.HOME3}>Home 3</DropLink2>
              </Dropdown2>
            )}
          </DropdownWrapper2>

          <Dot2 />

          {/* PAGES */}
          <DropdownWrapper2
            onMouseEnter={() => openWithDelay("pages")}
            onMouseLeave={closeWithDelay}
          >
            <LinkItem2>PAGES</LinkItem2>
            {openMenu === "pages" && (
              <Dropdown2>
                <DropLink2 to={ROUTES.HOME1}>Home 1</DropLink2>
                <DropLink2 to={ROUTES.HOME2}>Home 2</DropLink2>
                <DropLink2 to={ROUTES.HOME3}>Home 3</DropLink2>
              </Dropdown2>
            )}
          </DropdownWrapper2>

          <Dot2 />

          {/* SERVICES */}
          <DropdownWrapper2
            onMouseEnter={() => openWithDelay("services")}
            onMouseLeave={closeWithDelay}
          >
            <LinkItem2>SERVICES</LinkItem2>
            {openMenu === "services" && (
              <Dropdown2>
                <DropLink2>SMM Services</DropLink2>
                <DropLink2>SEO Optimization</DropLink2>
                <DropLink2>Brand Marketing</DropLink2>
              </Dropdown2>
            )}
          </DropdownWrapper2>

          <Dot2 />

          {/* PORTFOLIO */}
          <DropdownWrapper2
            onMouseEnter={() => openWithDelay("portfolio")}
            onMouseLeave={closeWithDelay}
          >
            <LinkItem2>PORTFOLIO</LinkItem2>
            {openMenu === "portfolio" && (
              <Dropdown2>
                <DropLink2>Our Projects</DropLink2>
                <DropLink2>Case Studies</DropLink2>
              </Dropdown2>
            )}
          </DropdownWrapper2>

          <Dot2 />

          {/* BLOG */}
          <DropdownWrapper2
            onMouseEnter={() => openWithDelay("blog")}
            onMouseLeave={closeWithDelay}
          >
            <LinkItem2 to={ROUTES.BLOG}>BLOG</LinkItem2>
            {openMenu === "blog" && (
              <Dropdown2>
                <DropLink2 to={ROUTES.BLOG}>Blog List</DropLink2>
                <DropLink2 to={ROUTES.BLOG_DETAILS}>Blog Details</DropLink2>
              </Dropdown2>
            )}
          </DropdownWrapper2>

          <Dot2 />

          <LinkItem2 to={ROUTES.CONTACT}>CONTACT US</LinkItem2>
        </Nav2>
      </Left2>

      <Right2>
        <Phone2>
          <Icon src={Logoo} />
        </Phone2>

        <Search2>
          <img src={SearchIcon} alt="" />
        </Search2>

        <ContactBtn2>
          Get In Touch
          <FlyImage src={FlyImg} alt="Flying Icon" />
        </ContactBtn2>
      </Right2>
    </HeaderBox2>
  );
}

/* ----------------- styles ---------------- */

const HeaderBox2 = styled.header`
  width: 1500px;
  margin-left:15px;
  height: 90px;
  padding: 0 40px;
  background: #faf9f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  margin-top: 20px;
  border: 1px solid #ecead9;
`;

const Left2 = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  .logo {
    width: 100px;
  }
`;

const Nav2 = styled.nav`
  display: flex;
  align-items: center;
  margin-left:170px;
  gap: 22px;
  position: relative;
`;

const LinkItem2 = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: #3a3a3a;
  text-decoration: none;

  &:hover {
    color: #d4bc3a;
  }
`;

const Dot2 = styled.div`
  width: 5px;
  height: 5px;
  background: #e2c542;
  border-radius: 50%;
`;

const DropdownWrapper2 = styled.div`
  position: relative;
`;

const Dropdown2 = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  width: 170px;
  background: white;
  border-radius: 10px;
  padding: 12px 0;
  border: 1px solid #e8e8e8;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
  z-index: 20;
`;

const DropLink2 = styled(Link)`
  display: block;
  padding: 10px 16px;
  color: #444;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    background: #f0f0f0;
    color: #d4bc3a;
  }
`;

const Right2 = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const Phone2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Search2 = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  width: 140px;
  height: auto;
  cursor: pointer;
`;

const ContactBtn2 = styled.div`
  background: #f0d14b;
  padding: 12px 22px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FlyImage = styled.img`
  width: 30px;
  height: auto;
`;
