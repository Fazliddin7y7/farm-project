import React, { useState } from "react";
import styled from "styled-components";

//images
import Background from "./faqPng/background.png";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const FaqCtn = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f9fa;
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
  gap: 10px;
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
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 25px;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
`;

const SectionTag = styled.span`
  display: inline-block;
  background: #e8f5e9;
  color: #4CAF50;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 20px;
  border-radius: 20px;
  margin-bottom: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #7f8c8d;
  font-style: italic;
`;

const ChapterSection = styled(Section)`
  background: linear-gradient(135deg, #f8fff8 0%, #ffffff 100%);
  border-left: 5px solid #4CAF50;
`;

const ChapterHeader = styled.div`
  margin-bottom: 40px;
`;

const ChapterTag = styled(SectionTag)`
  background: #4CAF50;
  color: white;
`;

const ChapterTitle = styled.h2`
  font-size: 28px;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ChapterSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  font-weight: 500;
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 20px;
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const FaqHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  cursor: pointer;
`;

const FaqNumber = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #4CAF50;
  min-width: 30px;
`;

const FaqQuestion = styled.div`
  flex: 1;
  
  h3 {
    font-size: 18px;
    color: ${props => props.isOpen ? '#4CAF50' : '#2c3e50'};
    font-weight: 600;
    margin: 0;
    transition: color 0.3s ease;
    
    &:hover {
      color: #4CAF50;
    }
  }
`;

const FaqToggle = styled.div`
  color: #4CAF50;
  font-size: 20px;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const FaqAnswer = styled.div`
  padding-left: 45px;
  padding-top: 15px;
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  
  p {
    margin: 0;
  }
`;

const generalQuestions = [
  {
    number: "01",
    question: "What is Agricultural Biotechnology?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  },
  {
    number: "02",
    question: "Can the products be applied during rainy season?",
    answer: ""
  },
  {
    number: "03",
    question: "What vegetables can I grow in my hothouse?",
    answer: ""
  },
  {
    number: "04",
    question: "What is modern agriculture?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  },
  {
    number: "05",
    question: "What are the 2 main types of farming?",
    answer: ""
  },
  {
    number: "06",
    question: "What are the different types of greenhouse?",
    answer: ""
  }
];

const chapterQuestions = [
  {
    number: "01",
    question: "What are the ideal temperature and humidity conditions for strawberry farming?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
  },
  {
    number: "02",
    question: "What are the common diseases and pests that affect strawberry plants?",
    answer: ""
  },
  {
    number: "03",
    question: "What are the government initiatives in the agriculture sector?",
    answer: ""
  },
  {
    number: "04",
    question: "How can we adapt agriculture to the impacts of climate change?",
    answer: ""
  },
  {
    number: "05",
    question: "What can be done to reduce greenhouse gas emissions from agriculture?",
    answer: ""
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (section, index) => {
    setOpenItems(prev => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`]
    }));
  };

  return (
    <>
      <Header />
      <FaqCtn>
        <Banner>
          <img src={Background} alt="FAQ Background" />
          <BannerOverlay>
            <BannerTitle>FAQ</BannerTitle>
            <Breadcrumb>
              <span>AGENNO</span>
              <span>›</span>
              <span className="active">FAQ</span>
            </Breadcrumb>
          </BannerOverlay>
        </Banner>

        <MainContent>
          {/* General Questions Section */}
          <Section>
            <SectionHeader>
              <SectionTag>General Questions</SectionTag>
              <SectionTitle>General Questions</SectionTitle>
              <SectionSubtitle>Most frequently asked questions about agriculture</SectionSubtitle>
            </SectionHeader>
            
            <FaqList>
              {generalQuestions.map((item, index) => (
                <FaqItem key={index}>
                  <FaqHeader onClick={() => toggleItem('general', index)}>
                    <FaqNumber>{item.number}</FaqNumber>
                    <FaqQuestion isOpen={openItems[`general-${index}`]}>
                      <h3>{item.question}</h3>
                    </FaqQuestion>
                    <FaqToggle isOpen={openItems[`general-${index}`]}>
                      ▼
                    </FaqToggle>
                  </FaqHeader>
                  {openItems[`general-${index}`] && item.answer && (
                    <FaqAnswer>
                      <p>{item.answer}</p>
                    </FaqAnswer>
                  )}
                </FaqItem>
              ))}
            </FaqList>
          </Section>

          {/* Chapter 1 Section */}
          <ChapterSection>
            <ChapterHeader>
              <ChapterTag>Chapter 1: How to Know</ChapterTag>
              <ChapterTitle>Happy to Answer All Your Questions</ChapterTitle>
              <ChapterSubtitle>Detailed answers to specific agricultural questions</ChapterSubtitle>
            </ChapterHeader>
            
            <FaqList>
              {chapterQuestions.map((item, index) => (
                <FaqItem key={index}>
                  <FaqHeader onClick={() => toggleItem('chapter', index)}>
                    <FaqNumber>{item.number}</FaqNumber>
                    <FaqQuestion isOpen={openItems[`chapter-${index}`]}>
                      <h3>{item.question}</h3>
                    </FaqQuestion>
                    <FaqToggle isOpen={openItems[`chapter-${index}`]}>
                      ▼
                    </FaqToggle>
                  </FaqHeader>
                  {openItems[`chapter-${index}`] && item.answer && (
                    <FaqAnswer>
                      <p>{item.answer}</p>
                    </FaqAnswer>
                  )}
                </FaqItem>
              ))}
            </FaqList>
          </ChapterSection>
        </MainContent>
      </FaqCtn>
      <Footer />
    </>
  );
}