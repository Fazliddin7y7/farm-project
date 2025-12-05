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
  background: linear-gradient(180deg, #f8fff8 0%, #ffffff 100%);
  padding-top: 80px;

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    -webkit-user-drag: none;
    user-select: none;
    pointer-events: none;
    display: block;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    padding: 30px 15px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    gap: 30px;
  }
`;

const CardsCtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.03);
    }
  }

  p {
    font-size: 16px;
    color: #4a8c3e;
    font-weight: 500;
    margin: 0;
    text-align: center;
  }

  h1 {
    font-size: 22px;
    color: #2d5a27;
    font-weight: 600;
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
    padding: 15px;
    
    img {
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    max-width: 320px;
    height: auto;
    
    img {
      height: 220px;
    }
  }
`;

const SectionImage = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  
  img {
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
                <img src={BackgroundImg} alt="Team background" />

                <ContentWrapper>
                    <CardsCtn>
                        <CardsRow>
                            {firstRow.map((member, index) => (
                                <Card key={index}>
                                    <img src={member.img} alt={member.name} />
                                    <p>{member.position}</p>
                                    <h1>{member.name}</h1>
                                </Card>
                            ))}
                        </CardsRow>

                        <CardsRow>
                            {secondRow.map((member, index) => (
                                <Card key={index}>
                                    <img src={member.img} alt={member.name} />
                                    <p>{member.position}</p>
                                    <h1>{member.name}</h1>
                                </Card>
                            ))}
                        </CardsRow>

                        <SectionImage>
                            <img src={Section} alt="Team section" />
                        </SectionImage>
                    </CardsCtn>
                </ContentWrapper>
            </TeamCtn>
            <Footer />
        </>
    )
}