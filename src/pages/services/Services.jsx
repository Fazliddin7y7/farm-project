import React from "react";
import styled from "styled-components";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//images
import BackgoundImg from "./ServicesPng/background.png";

const ServicesCtn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f9f9f9;
  padding-top: 80px;
`;

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

const MainContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 60px 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
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
`;

const ServiceHeader = styled.div`
  margin-bottom: 20px;
`;

const ServiceTag = styled.span`
  display: inline-block;
  background: #e8f5e9;
  color: #4CAF50;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 15px;
  border-radius: 15px;
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h2`
  font-size: 24px;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.3;
`;

const ServiceSubtitle = styled.h3`
  font-size: 20px;
  color: #4CAF50;
  font-weight: 600;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const TwoTagsCard = styled(ServiceCard)`
  position: relative;
  
  &::before {
    background: linear-gradient(90deg, #4CAF50 50%, #FF9800 50%);
  }
`;

const TwoTagsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const FruitTag = styled(ServiceTag)`
  background: #ffecb3;
  color: #FF9800;
`;

const VegetableTag = styled(ServiceTag)`
  background: #c8e6c9;
  color: #4CAF50;
`;

const FertilizerTag = styled(ServiceTag)`
  background: #d1c4e9;
  color: #673AB7;
`;

export default function Services() {
    const services = [
        {
            tags: ["FERTILIZER"],
            title: "Harvest Concepts",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#673AB7"
        },
        {
            tags: ["FRUITS"],
            title: "Fresh Vegetables",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#FF9800"
        },
        {
            tags: ["FRUITS"],
            title: "Natural Carrots",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#FF9800"
        },
        {
            tags: ["FRUITS"],
            title: "Farming Products",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#FF9800"
        },
        {
            tags: ["FERTILIZER"],
            title: "Dairy Production",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#673AB7"
        },
        {
            tags: ["VEGETABLE"],
            title: "Nutrition Solutions",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#4CAF50"
        },
        {
            tags: ["FERTILIZER"],
            title: "Soil Fertilization",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#673AB7"
        },
        {
            tags: ["VEGETABLE"],
            title: "Product Supplies",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "#4CAF50"
        },
        {
            tags: ["FRUITS", "VEGETABLE"],
            title: "Organic Vegetables",
            description: "Farming and animal husbandry and discuss with farmers and scientists.",
            color: "linear-gradient(90deg, #FF9800 50%, #4CAF50 50%)"
        }
    ];

    const getTagComponent = (tag) => {
        switch(tag) {
            case "FRUITS":
                return <FruitTag key={tag}>{tag}</FruitTag>;
            case "VEGETABLE":
                return <VegetableTag key={tag}>{tag}</VegetableTag>;
            case "FERTILIZER":
                return <FertilizerTag key={tag}>{tag}</FertilizerTag>;
            default:
                return <ServiceTag key={tag}>{tag}</ServiceTag>;
        }
    };

    return (
        <>
            <Header />
            <ServicesCtn>
                <Banner>
                    <img src={BackgoundImg} alt="Services Banner" />
                    <BannerOverlay>
                        <BannerTitle>Services</BannerTitle>
                        <Breadcrumb>
                            <span>AGENNO</span>
                            <span>|</span>
                            <span className="active">SERVICES</span>
                        </Breadcrumb>
                    </BannerOverlay>
                </Banner>

                <MainContent>
                    <ServicesGrid>
                        {services.map((service, index) => (
                            <ServiceCard key={index}>
                                <ServiceHeader>
                                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
                                        {service.tags.map(tag => getTagComponent(tag))}
                                    </div>
                                    <ServiceTitle>{service.title}</ServiceTitle>
                                </ServiceHeader>
                                <ServiceDescription>{service.description}</ServiceDescription>
                            </ServiceCard>
                        ))}
                    </ServicesGrid>
                </MainContent>
            </ServicesCtn>
            <Footer />
        </>
    )
}