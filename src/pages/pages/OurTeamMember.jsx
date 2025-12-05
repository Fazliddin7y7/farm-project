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

`;

const CardsCtn = styled.div`
width: 100%;
height: 900px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
`;

const Cards2Ctn = styled.div`
width: 100%;
height: 400px;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const Card = styled.div`
width: 300px;
height: 400px;
display: flex;
flex-direction: column;
gap: 10px;
p {
    font-weight: 50;
}
h1 {
    font-weight: 500;
    font-size: 25px;
}
img {
    width: 250px;

}

`;
export default function OurTeamMember() {
    return (
        <>
            <Header />
            <TeamCtn>
                <img src={BackgroundImg} alt="" />

                <CardsCtn>
                    <Cards2Ctn>
                        <Card>
                            <img src={Jacob} alt="" />
                            <p>Ceo Owner</p>
                            <h1>Jacob Mersin</h1>

                        </Card>

                        <Card>
                            <img src={Clara} alt="" />
                            <p>Supervisor</p>
                            <h1>Clara Henry</h1>

                        </Card>

                        <Card>
                            <img src={Paula} alt="" />
                            <p>Manager</p>
                            <h1>Paula Den</h1>

                        </Card>

                        <Card>
                            <img src={Carla} alt="" />
                            <p>Marketing</p>
                            <h1>Carla Hall</h1>

                        </Card>

                    </Cards2Ctn>
                    <Cards2Ctn>
                        <Card>
                            <img src={Mark} alt="" />
                            <p>Sales Manager</p>
                            <h1>Mark Donald</h1>

                        </Card>

                        <Card>
                            <img src={Jamie} alt="" />
                            <p>Garden Experts</p>
                            <h1>Jamie Oliver</h1>

                        </Card>

                        <Card>
                            <img src={Alice} alt="" />
                            <p>Senior Manager</p>
                            <h1>Alice Waters</h1>

                        </Card>

                        <Card>
                            <img src={Julia} alt="" />
                            <p>Senior Worker</p>
                            <h1>Julia Taylor</h1>

                        </Card>



                    </Cards2Ctn>

                    <img src={Section} alt="" />

                </CardsCtn>



            </TeamCtn>
            <Footer />

        </>
    )
}