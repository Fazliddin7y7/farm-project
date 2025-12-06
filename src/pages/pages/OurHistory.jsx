import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images
import BackgroundImg from "./aboutPng/background.png";
import SectionImg from "./historyPng/section.png";
import Section2 from "./historyPng/section2.png";

const HistoryCtn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding-top: 80px;
`;

/* ===== BANNER SECTION ===== */
const Banner = styled.div`
  width: 100%;
  position: relative;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
  }
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const BannerTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  
  span {
    color: #ddd;
  }
  
  .active {
    color: #4CAF50;
    font-weight: 600;
  }
`;

/* ===== MAIN CONTENT ===== */
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const MainTitle = styled.h1`
  font-size: 42px;
  color: #2d5a27;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: #4a8c3e;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 15px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
    border-color: #4caf50;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  color: white;
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.3rem;
  color: #2d5a27;
  margin-bottom: 15px;
  font-weight: 600;
`;

/* ===== SECTION IMAGES ===== */
const SectionImage = styled.div`
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
`;

/* ===== TIMELINE SECTION ===== */
const TimelineSection = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  padding: 40px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const LeftTitle = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Chip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  background: #e8f5e9;
  padding: 10px 20px;
  border-radius: 20px;
  color: #4a8c3e;
  font-weight: 600;
  margin-bottom: 15px;
`;

const MainTitle2 = styled.h1`
  font-size: 36px;
  margin: 10px 0;
  color: #2d5a27;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const YearTitle = styled.h2`
  font-size: 28px;
  color: #4a8c3e;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const RightText = styled.p`
  flex: 1;
  min-width: 300px;
  font-size: 16px;
  color: #666;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const TimelineBar = styled.div`
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  margin: 50px 0;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 2px;
    background: #e0e0e0;
    z-index: -1;
  }
`;

const TimelineDots = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -11px;
`;

const Dot = styled.div`
  width: 20px;
  height: 20px;
  background: white;
  border: 4px solid #4CAF50;
  border-radius: 50%;
  margin-top: -10px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background: #4CAF50;
    border-radius: 50%;
  }
`;

const ItemsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 40px auto 0;
  }
`;

const TimelineItem = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: #f0f7f0;
  }
`;

const ItemYear = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #2d5a27;
  margin-bottom: 15px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  color: #2d5a27;
  margin-bottom: 10px;
  font-weight: 600;
`;

const ItemText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

export default function OurHistory() {
  const services = [
    { title: "Garlic Farming", icon: "🧄" },
    { title: "Fertilizer Distribution", icon: "💧" },
    { title: "Lavender Farming", icon: "🌸" },
    { title: "Poultry Farming", icon: "🐔" },
    { title: "Gourmet Mushrooms", icon: "🍄" },
    { title: "Organic Fertilizer", icon: "🌿" },
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
        {/* Banner Section */}
        <Banner>
          <img src={BackgroundImg} alt="Our History Banner" />
          <BannerOverlay>
            <BannerTitle>Our History</BannerTitle>
            <Breadcrumb>
              <span>AGENNO</span>
              <span>›</span>
              <span className="active">OUR HISTORY</span>
            </Breadcrumb>
          </BannerOverlay>
        </Banner>

        <ContentWrapper>
          {/* About Section */}
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
                    <span style={{ fontSize: "2.5rem" }}>{service.icon}</span>
                  </IconWrapper>
                  <ServiceTitle>{service.title}</ServiceTitle>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </AboutSection>

          {/* Section Image 1 */}
          <SectionImage>
            <img src={SectionImg} alt="Agriculture Section" />
          </SectionImage>

          {/* Timeline Section */}
          <TimelineSection>
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

            {/* Timeline Bar */}
            <TimelineBar />
            <TimelineDots>
              <Dot /> <Dot /> <Dot /> <Dot />
            </TimelineDots>

            {/* Timeline Items */}
            <ItemsRow>
              {timeline.map((item, idx) => (
                <TimelineItem key={idx}>
                  <ItemYear>{item.year}</ItemYear>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemText>{item.text}</ItemText>
                </TimelineItem>
              ))}
            </ItemsRow>
          </TimelineSection>

          {/* Section Image 2 */}
          <SectionImage>
            <img src={Section2} alt="Farm Section" />
          </SectionImage>
        </ContentWrapper>
      </HistoryCtn>
      <Footer />
    </>
  );
}