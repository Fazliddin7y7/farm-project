import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images 
import BackgroundImg from "./teamPng/background.png";
import Alice from "./teamPng/alice.png";
import Carla from "./teamPng/carla.png";
import Clara from "./teamPng/clara.png";
import Jacob from "./teamPng/jacob.png";
import Jamie from "./teamPng/jamie.png";
import Julia from "./teamPng/julia.png";
import Mark from "./teamPng/mark.png";
import Paula from "./teamPng/paula.png";
import Section from "./teamPng/section.png";

const TeamCtn = styled.div`
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

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    padding: 40px 15px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding: 30px 10px;
    gap: 30px;
  }
`;

const CardsCtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #2d5a27;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 40px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardsRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 4px;
    background: #4CAF50;
    transition: width 0.3s ease;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    font-size: 16px;
    color: #4a8c3e;
    font-weight: 600;
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 22px;
    color: #2d5a27;
    font-weight: 700;
    margin: 0;
    text-align: center;
  }

  @media (max-width: 1200px) {
    max-width: 280px;
    height: 380px;
    
    img {
      height: 230px;
    }
  }

  @media (max-width: 900px) {
    max-width: 100%;
    height: auto;
    min-height: 380px;
    padding: 15px;
    
    img {
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    max-width: 320px;
    height: auto;
    min-height: 350px;
    
    img {
      height: 200px;
    }
  }
`;

const SectionImage = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
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

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export default function OurTeamMember() {
    const firstRow = [
        { img: Jacob, position: "Ceo Owner", name: "Jacob Mersin" },
        { img: Clara, position: "Supervisor", name: "Clara Henry" },
        { img: Paula, position: "Manager", name: "Paula Den" },
        { img: Carla, position: "Marketing", name: "Carla Hall" }
    ];

    const secondRow = [
        { img: Mark, position: "Sales Manager", name: "Mark Donald" },
        { img: Jamie, position: "Garden Experts", name: "Jamie Oliver" },
        { img: Alice, position: "Senior Manager", name: "Alice Waters" },
        { img: Julia, position: "Senior Worker", name: "Julia Taylor" }
    ];

    return (
        <>
            <Header />
            <TeamCtn>
                {/* Banner Section */}
                <Banner>
                    <img src={BackgroundImg} alt="Team Background" />
                    <BannerOverlay>
                        <BannerTitle>Our Team</BannerTitle>
                        <Breadcrumb>
                            <span>AGENNO</span>
                            <span>›</span>
                            <span className="active">OUR TEAM</span>
                        </Breadcrumb>
                    </BannerOverlay>
                </Banner>

                <ContentWrapper>
                    <CardsCtn>
                        <div>
                            <SectionTitle>Meet Our Leadership Team</SectionTitle>
                            <SectionSubtitle>
                                Our experienced team is dedicated to sustainable agriculture and organic farming practices
                            </SectionSubtitle>
                            <CardsRow>
                                {firstRow.map((member, index) => (
                                    <Card key={index}>
                                        <img src={member.img} alt={member.name} />
                                        <p>{member.position}</p>
                                        <h1>{member.name}</h1>
                                    </Card>
                                ))}
                            </CardsRow>
                        </div>

                        <div>
                            <SectionTitle>Our Expert Specialists</SectionTitle>
                            <SectionSubtitle>
                                Professionals with years of experience in various agricultural domains
                            </SectionSubtitle>
                            <CardsRow>
                                {secondRow.map((member, index) => (
                                    <Card key={index}>
                                        <img src={member.img} alt={member.name} />
                                        <p>{member.position}</p>
                                        <h1>{member.name}</h1>
                                    </Card>
                                ))}
                            </CardsRow>
                        </div>

                        <SectionImage>
                            <img src={Section} alt="Team Collaboration" />
                        </SectionImage>
                    </CardsCtn>
                </ContentWrapper>
            </TeamCtn>
            <Footer />
        </>
    )
}