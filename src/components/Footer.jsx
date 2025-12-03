import React from "react";
import styled from "styled-components";
import Logoo from "../pages/home/footerPng/logoo.png"; 
import FbIcon from "../pages/home/footerPng/fb.png";  
import XIcon from "../pages/home/footerPng/x.png";   
import InIcon from "../pages/home/footerPng/in.png";  
import IgIcon from "../pages/home/footerPng/ig.png";  

const FooterContainer = styled.footer`
  width: 100%;
  background: #ffffff;
  padding: 70px 90px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  font-family: "Signika", sans-serif;
  position: relative;
  left: 0;
  bottom: 0;

  @media (max-width: 900px) {
    padding: 50px 30px;
  }
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 15px; 
  margin-left:110px;

  @media (max-width: 900px) {
    width: 100%;
    margin-left:0;
  }
`;

const LogoIcon = styled.img`
  width:170px;
  height:55px;
  margin-bottom:20px;
`;

const Desc = styled.p`
  width: 80%;
  font-size: 16px;
  font-weight:400;
  color: rgba(64, 74, 61, 1);
  line-height: 22px;
  font-family: "Roboto", sans-serif;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.img`
  width: 36px;
  height: 36px;
  padding: 8px;
  background: rgba(145, 179, 129, 0.12);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: rgba(145, 179, 129, 0.3);
  }
`;

const Center = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right:200px;

  @media (max-width: 900px) {
    width: 100%;
    margin-right:0;
  }
`;

const Title = styled.h3`
  font-size: 22px;
  color: #3b4c39;
  font-weight: 600;
`;

const MiddleLists = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap:0px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width:300px;
`;

const ListGroup3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width:300px;
  margin-left:100px;

  @media (max-width: 900px) {
    margin-left:0;
  }
`;

const ListTitle = styled.h4`
  font-size: 18px;
  color: #3b4c39;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: "Signika", sans-serif;
`;

const ListItem = styled.div`
  font-size: 15px;
  color: #555;
  font-family: "Roboto", sans-serif;
  width:200px;
`;

const Bottom = styled.div`
  width: 100%;
  border-top: 1px solid #e5e5e5;
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <TopArea>
        <Left>
          <LogoIcon src={Logoo}/>
          <Desc>
            Mauris sed molestie sem. Sed vel vestibulum elit, non accumsan risus.
            In vitae sapien viverra est Duo el illum inani senserit.
          </Desc>
          <SocialRow>
            <SocialIcon src={FbIcon} />
            <SocialIcon src={XIcon} />
            <SocialIcon src={InIcon} />
            <SocialIcon src={IgIcon} />
          </SocialRow>
        </Left>
        <Center>
          <Title>
            Professional & modern, a theme designed to help your business stand out
            from the rest.
          </Title>
          <MiddleLists>
            <ListGroup>
              <ListTitle>Useful Link</ListTitle>
              <ListItem>Company</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
            </ListGroup>
            <ListGroup>
              <ListTitle>Working Time</ListTitle>
              <ListItem>Mon - Fri: 9.00am - 5.00pm</ListItem>
              <ListItem>Saturday: 10.00am - 6.00pm</ListItem>
              <ListItem>Sunday Closed</ListItem>
            </ListGroup>
            <ListGroup3>
              <ListTitle>Our Address</ListTitle>
              <ListItem>Old Westbury 256, New York</ListItem>
              <ListItem>11201, United States</ListItem>
            </ListGroup3>
          </MiddleLists>
          <Bottom>
            <div>Terms & Conditions  |  Privacy Policy</div>
            <div>Copyright © 2024 Agrimo, All Rights Reserved.</div>
          </Bottom>
        </Center>
      </TopArea>
    </FooterContainer>
  );
}
