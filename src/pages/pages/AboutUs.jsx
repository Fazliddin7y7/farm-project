import React from "react";
import styled from "styled-components";

//images
import BackgroundImage from './aboutPng/background.png';
import CurrentlyImage from './aboutPng/currently.png';
import EcoIcon from './aboutPng/ecoFarms.png';
import TruckIcon from './aboutPng/specialEquipment.png';
import SectionImage from "./aboutPng/section.png"; 
import Container from "./aboutPng/container.png"

// Main Container
const AboutCtn = styled.div`
  width: 100%;
  min-height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  padding: 20px;
  
  h1 {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 10px;
    
    @media (max-width: 1024px) {
      font-size: 36px;
    }
    
    @media (max-width: 768px) {
      font-size: 32px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px;
      line-height: 1.3;
    }
  }
  
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    -webkit-user-drag: none;
    user-select: none;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    gap: 40px;
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
    padding: 10px;
  }
`;

// CurrentlyCtn - Responsive qilish
const CurrentlyCtn = styled.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  
  h1 {
    font-weight: 600;
    text-align: left;
    font-size: 36px;
    line-height: 1.2;
    
    @media (max-width: 1024px) {
      font-size: 32px;
    }
    
    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
      margin-bottom: 15px;
    }
    
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  
  p {
    font-weight: 100;
    line-height: 1.6;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 15px;
      text-align: center;
      margin-bottom: 20px;
    }
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  
  img {
    width: 35%;
    
    @media (max-width: 1024px) {
      width: 40%;
    }
    
    @media (max-width: 768px) {
      width: 80%;
      max-width: 400px;
      margin-bottom: 30px;
    }
    
    @media (max-width: 480px) {
      width: 90%;
      max-width: 350px;
    }
  }
  
  .info-boxes {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    gap: 30px;
    width: 60%;
    
    @media (max-width: 1024px) {
      width: 55%;
      margin-left: 15px;
    }
    
    @media (max-width: 768px) {
      width: 100%;
      margin-left: 0;
      gap: 25px;
      align-items: center;
    }
    
    @media (max-width: 480px) {
      gap: 20px;
    }
  }
  
  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    
    @media (max-width: 768px) {
      width: 100%;
      max-width: 500px;
    }
    
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
  }
  
  .icon {
    width: 60px;
    height: 60px;
    object-fit: contain;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
      width: 55px;
      height: 55px;
    }
    
    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }
  
  .text-box h3 {
    font-size: 22px;
    color: #2c3e1f;
    margin-bottom: 5px;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
    
    @media (max-width: 480px) {
      font-size: 18px;
      margin-bottom: 8px;
    }
  }
  
  .text-box p {
    width: 100%;
    font-size: 15px;
    color: #444;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 1.5;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
      width: 90%;
      margin: 0 auto;
    }
  }
  
  @media (max-width: 1024px) {
    gap: 30px;
    min-height: 450px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    gap: 40px;
    padding: 20px 0;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
    padding: 15px 0;
  }
`;

// AgricultureCtn - Responsive
const AgricultureCtn = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: #5B8C51;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: auto;
  }
  
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  padding: 60px 40px 60px 80px;
  color: white;
  
  @media (max-width: 1280px) {
    padding: 50px 40px 50px 60px;
  }
  
  @media (max-width: 1024px) {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 40px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 30px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: 1280px) {
    font-size: 38px;
  }
  
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
  opacity: 0.9;
  
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    margin-bottom: 35px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 30px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (max-width: 768px) {
    gap: 25px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const StepItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

const StepNumber = styled.div`
  min-width: 50px;
  height: 50px;
  background-color: white;
  color: #5B8C51;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    min-width: 45px;
    height: 45px;
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    min-width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  @media (max-width: 480px) {
    font-size: 17px;
    margin-bottom: 6px;
  }
`;

const StepDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 13px;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #4A7A40;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  @media (max-width: 1024px) {
    width: 100%;
    height: 400px;
    min-height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    min-height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
    min-height: 300px;
    padding: 15px;
  }
`;

const ExpertCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 300px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 768px) {
    max-width: 350px;
    padding: 25px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
    max-width: 280px;
  }
`;

const CardTitle = styled.h4`
  font-size: 22px;
  font-weight: 700;
  color: #2c3e1f;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 21px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const CardText = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const ExperienceBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  
  @media (max-width: 480px) {
    padding: 12px;
    gap: 12px;
  }
`;

const Years = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #5B8C51;
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ExperienceText = styled.div`
  font-size: 14px;
  color: #666;
  font-weight: 600;
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
  
  span {
    display: block;
    font-weight: 400;
    margin-top: 2px;
    color: #888;
    font-size: 12px;
    
    @media (max-width: 480px) {
      font-size: 11px;
    }
  }
`;

// Styled components for info boxes
const InfoBoxes = styled.div.attrs({ className: "info-boxes" })``;

const InfoItem = styled.div.attrs({ className: "info-item" })``;

const IconImg = styled.img.attrs({ className: "icon" })``;

const TextBox = styled.div.attrs({ className: "text-box" })``;

// Section Image responsive styles
const SectionImageWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  
  img {
    width: 100%;
    height: auto;
    
    @media (max-width: 768px) {
      max-height: 400px;
      object-fit: cover;
    }
    
    @media (max-width: 480px) {
      max-height: 300px;
    }
  }
`;

// Container Image responsive styles
const ContainerImageWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  
  img {
    width: 100%;
    height: auto;
    
    @media (max-width: 768px) {
      max-height: 500px;
      object-fit: cover;
    }
    
    @media (max-width: 480px) {
      max-height: 400px;
    }
  }
`;

export default function AboutUs() {
  return (
    <>
      <AboutCtn>
        <img src={BackgroundImage} alt="Background" />

        <CurrentlyCtn>
          <img src={CurrentlyImage} alt="Currently Organic Food" />

          <InfoBoxes>
            <div>
              <h1>Currently we are growing <br />
                and selling organic food</h1>

              <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                have suffered alteration in some form, by injected humour, or randomised words 
                which don't look even.</p>
            </div>
            
            <InfoItem>
              <IconImg src={EcoIcon} alt="Eco Farms Worldwide" />
              <TextBox>
                <h3>Eco Farms Worldwide</h3>
                <p>There are many variations of passages of lorem ipsum available majority have suffered.</p>
              </TextBox>
            </InfoItem>

            <InfoItem>
              <IconImg src={TruckIcon} alt="Special Equipment" />
              <TextBox>
                <h3>Special Equipment</h3>
                <p>There are many variations of passages of lorem ipsum available majority have suffered.</p>
              </TextBox>
            </InfoItem>
          </InfoBoxes>
        </CurrentlyCtn>

        <SectionImageWrapper>
          <img src={SectionImage} alt="Agriculture Section" />
        </SectionImageWrapper>

        <h1>Best Agriculture Services</h1>
        
        <ContainerImageWrapper>
          <img src={Container} alt="Agriculture Container" />
        </ContainerImageWrapper>

        <AgricultureCtn>
          <ContentWrapper>
            <Title>Agriculture matters to the future of development</Title>
            
            <Description>
              There are many variations of passages of Lorem Ipsum available, but the majority 
              have suffered alteration in some form, by injected humour, or randomised words 
              which don't look even.
            </Description>
            
            <StepsContainer>
              <StepItem>
                <StepNumber>01</StepNumber>
                <StepContent>
                  <StepTitle>Schedule Your Experience</StepTitle>
                  <StepDescription>
                    Ouisqu Teti Us Risus Adpis Viera Bibe Um Lima.
                  </StepDescription>
                </StepContent>
              </StepItem>
              
              <StepItem>
                <StepNumber>02</StepNumber>
                <StepContent>
                  <StepTitle>Get Professional Advice</StepTitle>
                  <StepDescription>
                    Ouisqu Teti Us Risus Adpis Viera Bibe Um Lima.
                  </StepDescription>
                </StepContent>
              </StepItem>
              
              <StepItem>
                <StepNumber>03</StepNumber>
                <StepContent>
                  <StepTitle>Meet Our Expert Farmer</StepTitle>
                  <StepDescription>
                    Ouisqu Teti Us Risus Adpis Viera Bibe Um Lima.
                  </StepDescription>
                </StepContent>
              </StepItem>
              
              <StepItem>
                <StepNumber>04</StepNumber>
                <StepContent>
                  <StepTitle>Now Get A Best Products</StepTitle>
                  <StepDescription>
                    Ouisqu Teti Us Risus Adpis Viera Bibe Um Lima.
                  </StepDescription>
                </StepContent>
              </StepItem>
            </StepsContainer>
          </ContentWrapper>
          
          <RightSide>
            <ExpertCard>
              <CardTitle>Expert Farmer</CardTitle>
              <CardText>
                Our experienced farmers have deep knowledge of organic farming techniques and sustainable agriculture.
              </CardText>
              
              <ExperienceBadge>
                <Years>15+</Years>
                <ExperienceText>
                  Years Experience
                  <span>in organic farming</span>
                </ExperienceText>
              </ExperienceBadge>
            </ExpertCard>
          </RightSide>
        </AgricultureCtn>

      </AboutCtn>
    </>
  );
}