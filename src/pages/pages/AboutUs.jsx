import React from "react";
import styled from "styled-components";

//images
import BackgroundImage from './aboutPng/background.png';
import CurrentlyImage from './aboutPng/currently.png';
import EcoIcon from './aboutPng/ecoFarms.png';
import TruckIcon from './aboutPng/specialEquipment.png';
import SectionImage from "./aboutPng/section.png"; 
import Container from "./aboutPng/container.png"

import Avatar1 from './aboutPng/daniel.png';
import Avatar2 from './aboutPng/ameliya.png'
import Avatar3 from './aboutPng/henry.png';

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";




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

const TimelineSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #f8f8f8;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 50px 10px;
  }
`;

const Container2 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #2c3e1f;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #5B8C51;
  }
  
  @media (max-width: 1024px) {
    font-size: 42px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background-color: #5B8C51;
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};
  align-items: center;
  margin-bottom: 80px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 60px;
    margin-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    margin-left: 50px;
    margin-bottom: 50px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    transform: rotate(45deg);
    ${props => props.isEven ? 
      'right: -10px; border-top: 1px solid #e0e0e0; border-right: 1px solid #e0e0e0;' : 
      'left: -10px; border-bottom: 1px solid #e0e0e0; border-left: 1px solid #e0e0e0;'
    }
    
    @media (max-width: 768px) {
      left: -10px;
      right: auto;
      border-bottom: 1px solid #e0e0e0;
      border-left: 1px solid #e0e0e0;
      border-top: none;
      border-right: none;
    }
  }
  
  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin-left: 0;
  }
  
  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;

const YearBadge = styled.div`
  position: absolute;
  top: -25px;
  ${props => props.isEven ? 'right: -60px;' : 'left: -60px;'}
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    left: -70px;
    right: auto;
    top: -20px;
  }
  
  @media (max-width: 480px) {
    left: -60px;
  }
`;

const Year = styled.span`
  padding: 8px 15px;
  background-color: #5B8C51;
  color: white;
  font-weight: 600;
  font-size: 14px;
  border-radius: 20px;
  min-width: 70px;
  text-align: center;
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 13px;
    min-width: 60px;
  }
`;

const ItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #2c3e1f;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

const ItemDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: ${props => props.hasSecondParagraph ? '15px' : '0'};
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: #5B8C51;
  border: 4px solid white;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 0 3px #5B8C51;
  
  @media (max-width: 768px) {
    left: 30px;
  }
  
  @media (max-width: 480px) {
    left: 25px;
    width: 16px;
    height: 16px;
    border-width: 3px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 25px 0;
  
  @media (max-width: 480px) {
    margin: 20px 0;
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



const TestimonialsSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: #f9f9f9;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 50px 10px;
  }
`;

const Container3 = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle2 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #2c3e1f;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background-color: #5B8C51;
  }
  
  @media (max-width: 1024px) {
    font-size: 42px;
    margin-bottom: 50px;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto 50px auto;
  }
  
  @media (max-width: 480px) {
    gap: 25px;
    margin-bottom: 40px;
  }
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 1024px) {
    padding: 35px 30px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 25px;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 25px;
  
  svg {
    width: 20px;
    height: 20px;
    fill: #FFD700;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const StarIcon = styled.svg.attrs({
  viewBox: "0 0 24 24",
  children: <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
})``;

const Quote = styled.blockquote`
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  font-style: italic;
  margin-bottom: 30px;
  position: relative;
  
  &:before {
    content: "❝";
    font-size: 40px;
    color: #5B8C51;
    opacity: 0.2;
    position: absolute;
    top: -20px;
    left: -10px;
  }
  
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

const CustomersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    gap: 25px;
  }
`;

const CustomerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
  border: 3px solid white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
  }
  
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

const CustomerName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #2c3e1f;
  margin-bottom: 5px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
  
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CustomerPosition = styled.p`
  font-size: 14px;
  color: #5B8C51;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;


export default function AboutUs() {

  const timelineData = [
    {
  
      title: "Open my Farm",
      description: "Corrupt! at consequatur magni minus! lusto eos consecetur similique minus culpa odio temporibus.",
      hasDivider: false,
      secondParagraph: null
    },
    {
      year1: null,
      year2: null,
      title: "Farm Remodelacion",
      description: "Majority have suffered alteration in some form by injected humor culpa odio temporibus.",
      hasDivider: true,
      secondParagraph: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even."
    },
    {

      title: "Grainfarmers Formed",
      description: "Always parties but trying she shewing of moment minus Vetti ratione hic corporis veritatis odit.",
      hasDivider: false,
      secondParagraph: null
    },
    {

      title: "Start of Agriculture",
      description: "Consequatur magni Corrupt! at minus! lusto eos consecetur similique minus culpa odio temporibus.",
      hasDivider: false,
      secondParagraph: null
    }
  ];


  const testimonials = [
    {
      quote: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      quote: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    },
    {
      quote: "I would recommend practitioners at this center to everyone! They are great to work with and are excellent trainers. Thank you all!",
    }
  ];

  const customers = [
    {
      name: "Daniel Craig",
      position: "CO FOUNDER",
      avatar: Avatar1
    },
    {
      name: "Amelia Dyer",
      position: "MANAGER",
      avatar: Avatar2
    },
    {
      name: "Henry Cavil",
      position: "CEO & FOUNDER",
      avatar: Avatar3
    }
  ];
  return (
    <>
    <Header />
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








        <TimelineSection>
      <Container2>
        <SectionTitle>Farming have been since 1866</SectionTitle>
        
        <TimelineContainer>
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <TimelineItem key={index} isEven={isEven}>
                <TimelineMarker />
                
                <TimelineContent isEven={isEven}>
                  {(item.year1 || item.year2) && (
                    <YearBadge isEven={isEven}>
                      {item.year1 && <Year>{item.year1}</Year>}
                      {item.year2 && <Year>{item.year2}</Year>}
                    </YearBadge>
                  )}
                  
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription hasSecondParagraph={!!item.secondParagraph}>
                    {item.description}
                  </ItemDescription>
                  
                  {item.secondParagraph && (
                    <>
                      <Divider />
                      <ItemDescription>
                        {item.secondParagraph}
                      </ItemDescription>
                    </>
                  )}
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </TimelineContainer>
      </Container2>
    </TimelineSection>



    <TestimonialsSection>
      <Container3>
        <SectionTitle2>What our customers say</SectionTitle2>
        
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Stars>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </Stars>
              
              <Quote>{testimonial.quote}</Quote>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        
        <CustomersGrid>
          {customers.map((customer, index) => (
            <CustomerCard key={index}>
              <Avatar src={customer.avatar} alt={customer.name} style={{width: "80px", height: "80px"}} />
              <CustomerName>{customer.name}</CustomerName>
              <CustomerPosition>{customer.position}</CustomerPosition>
            </CustomerCard>
          ))}
        </CustomersGrid>
      </Container3>
    </TestimonialsSection>

      </AboutCtn>
      <Footer />
    </>
  );
}