import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images
import BackgroundImg from "./aboutPng/background.png";
import SectionImg from "./historyPng/section.png";
import Section2 from "./historyPng/section2.png";





import { FaLeaf, FaSeedling, FaEgg, FaTint, FaSprayCan, FaAppleAlt } from "react-icons/fa";

const HistoryCtn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(180deg, #f8fff8 0%, #ffffff 100%);
  gap: 50px;

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

const AboutSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  margin-top: 40px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  color: #2d5a27;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  color: #4a8c3e;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 15px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px 25px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(46, 125, 50, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(46, 125, 50, 0.2);
    border-color: #4caf50;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: #2d5a27;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




const TimelineSection = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 80px;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;

const LeftTitle = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  background: #f3f5ef;
  padding: 8px 18px;
  border-radius: 20px;
  color: #44663c;
  font-weight: 600;
`;

const MainTitle2 = styled.h1`
  font-size: 3rem;
  margin: 20px 0 10px 0;
  color: #3e4b39;
`;

const YearTitle = styled.h2`
  font-size: 2.2rem;
  color: #3e4b39;
  margin-bottom: 20px;
`;

const RightText = styled.p`
  flex: 1;
  min-width: 300px;
  font-size: 1.05rem;
  color: #666;
  line-height: 1.7;
`;

const TimelineBar = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 70px 0;
  position: relative;
`;

const TimelineDots = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  background: #6ea762;
  border-radius: 50%;
  margin-top: -7px;
`;

const ItemsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ItemYear = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: transparent;
  -webkit-text-stroke: 2px #c2c2c2;
  margin-bottom: 15px;
`;

const ItemTitle = styled.h3`
  font-size: 1.3rem;
  color: #3b4936;
  margin-bottom: 10px;
`;

const ItemText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;


export default function OurHistory() {
  const services = [
    { title: "Garlic Farming", icon: <FaLeaf /> },
    { title: "Fertilizer Distribution", icon: <FaSprayCan /> },
    { title: "Lavender Farming", icon: <FaSeedling /> },
    { title: "Poultry Farming", icon: <FaEgg /> },
    { title: "Gourmet Mushrooms", icon: <FaAppleAlt /> }, 
    { title: "Organic Fertilizer", icon: <FaTint /> },
  ];

  const timeline = [
    {
      year: "1987",
      title: "Open my Farm",
      text: "Corrupti ut consequatur magni minus! Iusto eos consectetur similique minus culpa odio temporibus."
    },
    {
      year: "1995",
      title: "Farm Remodelacion",
      text: "Majority have suffered alteration in some form by injected humour culpa odio temporibus."
    },
    {
      year: "2000",
      title: "Grainfarmers Formed",
      text: "Always parties but trying she shewing of moment minus Velit ratione hic corporis veritatis odit."
    },
    {
      year: "1910",
      title: "Start of Agriculture",
      text: "Consequatur magni Corrupti ut minus! Lusto eos consectetur similique minus culpa odio temporibus."
    }
  ];

  return (
    <>
            <Header />
      <HistoryCtn>

        <ContentWrapper>
          <img src={BackgroundImg} alt="Farm background" />
          
          <AboutSection>
            <TitleContainer>
              <SubTitle>About Us</SubTitle>
              <MainTitle>We're Best Agriculture & Organic Farms</MainTitle>
              <Description>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form by injected humour, or randomised words
                which don't look even.
              </Description>
            </TitleContainer>

            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <IconWrapper>
                    {service.icon}
                  </IconWrapper>
                  <ServiceTitle>{service.title}</ServiceTitle>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </AboutSection>
        </ContentWrapper>

        <img src={SectionImg} alt="" />

        <TimelineSection>
      {/* Top Area */}
      <TopArea>
        <LeftTitle>
          <Chip>🌿 Our History</Chip>
          <MainTitle2>Farming have been since</MainTitle2>
          <YearTitle>1866</YearTitle>
        </LeftTitle>

        <RightText>
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words which don't look even.
        </RightText>
      </TopArea>

      {/* Line */}
      <TimelineBar />

      {/* Dots */}
      <TimelineDots>
        <Dot /> <Dot /> <Dot /> <Dot />
      </TimelineDots>

      {/* Items */}
      <ItemsRow>
        {timeline.map((item, idx) => (
          <div key={idx}>
            <ItemYear>{item.year}</ItemYear>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemText>{item.text}</ItemText>
          </div>
        ))}
      </ItemsRow>
    </TimelineSection>

    <img src={Section2} alt="" />




      </HistoryCtn>
      <Footer />
    </>
  );
}