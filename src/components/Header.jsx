import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import ROUTES from "../routes/routes";

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
  top: 0;
  left: 0;
  z-index: 1000;
  background: ${({ scrolled }) => (scrolled ? "rgba(0, 0, 0, 0.9)" : "transparent")};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
  
  @media (max-width: 1200px) {
    padding: 0 30px;
  }
  
  @media (max-width: 1024px) {
    padding: 0 20px;
    height: 80px;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
  }
  
  @media (max-width: 480px) {
    padding: 0 15px;
    height: 70px;
  }
`;

const Logo = styled.img`
  width: 100px;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1002;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 1024px) {
    width: 90px;
  }
  
  @media (max-width: 480px) {
    width: 80px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 320px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  padding: 100px 0 30px 0;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  overflow-y: auto;
  
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  &:hover .dropdown {
    display: flex;
  }
`;

const NavLink = styled.div`
  font-size: 16px;
  color: ${({ active }) => (active ? "#f5d142" : "white")};
  cursor: pointer;
  font-weight: 600;
  font-family: "Signika", sans-serif;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #f5d142;
    background: rgba(245, 209, 66, 0.1);
  }
`;

const DesktopDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: none;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #eaeaea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  animation: fadeIn 0.2s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DropdownLink = styled(Link)`
  font-size: 15px;
  color: ${({ active }) => (active ? "#f5d142" : "#333")};
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #f5d142;
    background: rgba(245, 209, 66, 0.1);
  }
`;

const MobileNavItem = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const MobileNavLink = styled.div`
  font-size: 18px;
  color: ${({ active }) => (active ? "#f5d142" : "white")};
  font-weight: 600;
  padding: 18px 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .arrow {
    font-size: 14px;
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const MobileDropdown = styled.div`
  background: rgba(255, 255, 255, 0.05);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  animation: slideDown 0.3s ease;
  
  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 500px;
    }
  }
`;

const MobileDropdownLink = styled(Link)`
  font-size: 16px;
  color: ${({ active }) => (active ? "#f5d142" : "rgba(255, 255, 255, 0.8)")};
  text-decoration: none;
  padding: 14px 30px 14px 50px;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:hover {
    color: #f5d142;
    background: rgba(245, 209, 66, 0.1);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  z-index: 1002;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Icon = styled.img`
  width: 168px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const SearchIcon = styled.img`
  width: 48px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const MobileRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 1002;
  
  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileIcon = styled.img`
  width: 40px;
  cursor: pointer;
  
  @media (max-width: 480px) {
    width: 35px;
  }
`;

const MobileLinkIcon = styled.img`
  width: 120px;
  cursor: pointer;
  
  @media (max-width: 480px) {
    width: 100px;
  }
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 24px;
  cursor: pointer;
  
  span {
    width: 100%;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg) translate(8px, 8px)" : "none")};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg) translate(8px, -8px)" : "none")};
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function Header() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  // Scroll effekti
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    {
      name: "HOME",
      hasDropdown: true,
      dropdownItems: [
        { to: ROUTES.HOME1, label: "Home 1" },
        { to: ROUTES.HOME2, label: "Home 2" },
        { to: ROUTES.HOME3, label: "Home 3" }
      ],
      isActive: location.pathname.includes("home")
    },
    {
      name: "PAGES",
      hasDropdown: true,
      dropdownItems: [
        { to: ROUTES.ABOUT, label: "About Us" },
        { to: ROUTES.FAQ, label: "FAQ" },
        { to: ROUTES.HISTORY, label: "Our History" },
        { to: ROUTES.TEAM, label: "Our Team" },
      ],
      isActive: location.pathname.match(/about|faq|history|team/)
    },
    {
      name: "SERVICES",
      hasDropdown: true,
      dropdownItems: [
        { to: ROUTES.SERVICES, label: "Services" },
        { to: ROUTES.SERVICE_DETAILS, label: "Service Details" }
      ],
      isActive: location.pathname.includes("services")
    },
    {
      name: "PORTFOLIO",
      hasDropdown: true,
      dropdownItems: [
        { to: ROUTES.PORTFOLIO_GRID2, label: "Portfolio Grid 2" },
        { to: ROUTES.PORTFOLIO_GRID3, label: "Portfolio Grid 3" },
        { to: ROUTES.PORTFOLIO_GRID4, label: "Portfolio Grid 4" }
      ],
      isActive: location.pathname.includes("portfolio")
    },
    {
      name: "BLOG",
      to: ROUTES.BLOG,
      hasDropdown: false,
      isActive: location.pathname === ROUTES.BLOG
    },
    {
      name: "CONTACT US",
      to: ROUTES.CONTACT,
      hasDropdown: false,
      isActive: location.pathname === ROUTES.CONTACT
    }
  ];

  const toggleMobileDropdown = (itemName) => {
    if (openMobileDropdown === itemName) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(itemName);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <>
      <HeaderContainer scrolled={scrolled}>
        {/* Logo */}
        <Link to={ROUTES.HOME1} onClick={closeMenu}>
          <Logo src={Logoo} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav>
          {menuItems.map((item) => (
            <NavItem key={item.name}>
              {item.hasDropdown ? (
                <>
                  <NavLink active={item.isActive}>
                    {item.name}
                  </NavLink>
                  <DesktopDropdown className="dropdown">
                    {item.dropdownItems.map((dropdownItem) => (
                      <DropdownLink
                        key={dropdownItem.to}
                        to={dropdownItem.to}
                        active={location.pathname === dropdownItem.to ? "active" : undefined}
                      >
                        {dropdownItem.label}
                      </DropdownLink>
                    ))}
                  </DesktopDropdown>
                </>
              ) : (
                <Link
                  to={item.to}
                  style={{ textDecoration: "none" }}
                  onClick={closeMenu}
                >
                  <NavLink active={item.isActive}>
                    {item.name}
                  </NavLink>
                </Link>
              )}
            </NavItem>
          ))}
        </DesktopNav>

        {/* Desktop Right Side */}
        <RightSide>
          <Icon src={LinkPng} alt="Link" />
          <SearchIcon src={Search} alt="Search" />
        </RightSide>

        {/* Mobile Right Side */}
        <MobileRightSide>
          <MobileLinkIcon src={LinkPng} alt="Link" />
          <MobileIcon src={Search} alt="Search" />
          <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </MobileRightSide>
      </HeaderContainer>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMenuOpen}>
        {menuItems.map((item) => (
          <MobileNavItem key={item.name}>
            {item.hasDropdown ? (
              <>
                <MobileNavLink
                  active={item.isActive}
                  isOpen={openMobileDropdown === item.name}
                  onClick={() => toggleMobileDropdown(item.name)}
                >
                  {item.name}
                  <span className="arrow">▼</span>
                </MobileNavLink>
                <MobileDropdown isOpen={openMobileDropdown === item.name}>
                  {item.dropdownItems.map((dropdownItem) => (
                    <MobileDropdownLink
                      key={dropdownItem.to}
                      to={dropdownItem.to}
                      active={location.pathname === dropdownItem.to ? "active" : undefined}
                      onClick={closeMenu}
                    >
                      {dropdownItem.label}
                    </MobileDropdownLink>
                  ))}
                </MobileDropdown>
              </>
            ) : (
              <Link
                to={item.to}
                style={{ textDecoration: "none" }}
                onClick={closeMenu}
              >
                <MobileNavLink active={item.isActive}>
                  {item.name}
                </MobileNavLink>
              </Link>
            )}
          </MobileNavItem>
        ))}
      </MobileNav>

      {/* Overlay */}
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
}