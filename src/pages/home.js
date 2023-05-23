import React, { useState } from "react";
import styled from "styled-components";
import beach from "assets/backgrounds/beach.png";
import london from "assets/backgrounds/london.png";
import copenhagen from "assets/backgrounds/copenhagen.png";
import nairobi from "assets/backgrounds/nairobi.png";
import china from "assets/backgrounds/china.png";
import pinacolada from "assets/icons/pinacolada.svg";
import idcardpasa from "assets/icons/idcardpasa.svg";
import customerservice from "assets/icons/customerservice.svg";
import Navbar from "components/navigation/navbar";
import Flightcard from "components/universal/flightcard";
import Newsletter from "components/universal/newsletter";
import Footer from "components/navigation/footer";
import Cheapflight from "components/universal/cheapflight";
import Packagecard from "components/universal/packagecard";
// eslint-disable-next-line
import FlightLoader from "components/universal/flightLoader";
import { ToastContainer } from "react-toastify";

function Home() {
  const cardItems = [
    {
      img: london,
    },
    {
      img: nairobi,
    },
    {
      img: china,
    },
    {
      img: copenhagen,
    },
  ];

  const [mode, setmode] = useState(0)


  return (
    <>
      <Wrapper>
        {/* <FlightLoader loa={formData} /> */}
        <HeroSection>
          <Navbar />
          <LocationTitle>Where are we going?</LocationTitle>
          <ControlWrap className='bg-white/60 w-11/12 mx-auto backdrop-blur-md rounded-xl shadow-xl'>
            {mode === 0 ? (
              <Flightcard show mode={mode} />
            ) : (
              <Packagecard show />
            )}

            <PackgesWrapper>
              <ContentWrapper className="container">
                <Radio
                  type="radio"
                  name="radio"
                  id="flight-d"
                  value={0}
                  checked={mode === 0 ? true : false}
                  onChange={(e) => {
                    setmode(parseInt(e.target.value));
                  }}
                />
                <Item htmlFor="flight-d">Flights</Item>
              </ContentWrapper>
              <ContentWrapper className="container">
                <Radio
                  type="radio"
                  name="radio"
                  id="package-d"
                  value={1}
                  onChange={(e) => {
                    setmode(parseInt(e.target.value));
                  }}
                />
                <Item htmlFor="package-d">Packages</Item>
              </ContentWrapper>
            </PackgesWrapper>
          </ControlWrap>
        </HeroSection>
        <ExploreDealsWrapper>
          <Title>Explore new deals for you</Title>
          <CardHolder>
            {cardItems.map((item, index) => (
              <CardContainer key={index}>
                <CardWrapper
                  style={{
                    backgroundImage: `linear-gradient(180deg, #171b4a00 0%, #15172c 100%),url(${item.img})`,
                  }}
                >
                  <FlightWrap>
                    <Flight>FLIGHT</Flight>
                    <Date>Feb 28th - March 30th</Date>
                  </FlightWrap>

                  <SmallSection>
                    <Route>Lagos to Bangkok</Route>
                    <Pricing>Starting from $859</Pricing>
                  </SmallSection>
                </CardWrapper>
              </CardContainer>
            ))}
          </CardHolder>
        </ExploreDealsWrapper>
        <ExploreDealsWrapper>
          <Title>Holiday packages curated for you</Title>
          <>
            <div className="grid-wrapper">
              <div id="item-1" className="grid-item">
                <Days> 3 DAYS</Days>

                <Hold>
                  <Packages>UNITED ARAB EMIRATES</Packages>
                  <Pack>
                    PremiumRed Dunes, Camel Safari, & BBQ at Al Khayma
                  </Pack>
                  <Cost>$859 per person</Cost>
                </Hold>
              </div>
              <div id="item-2" className="grid-item">
                <Days> 3 DAYS</Days>
                <Hold>
                  <Packages>UNITED ARAB EMIRATES</Packages>
                  <Pack>
                    PremiumRed Dunes, Camel Safari, & BBQ at Al Khayma
                  </Pack>
                  <Cost>$859 per person</Cost>
                </Hold>
              </div>
              <div id="item-3" className="grid-item">
                <Days> 3 DAYS</Days>
                <Hold>
                  <Packages>UNITED ARAB EMIRATES</Packages>
                  <Pack>
                    PremiumRed Dunes, Camel Safari, & BBQ at Al Khayma
                  </Pack>
                  <Cost>$859 per person</Cost>
                </Hold>
              </div>
              <div id="item-4" className="grid-item">
                <Days> 3 DAYS</Days>
                <Hold>
                  <Packages>UNITED ARAB EMIRATES</Packages>
                  <Pack>
                    PremiumRed Dunes, Camel Safari, & BBQ at Al Khayma
                  </Pack>
                  <Cost>$859 per person</Cost>
                </Hold>
              </div>
            </div>
          </>

          <ExploreBtn> Explore More Packages</ExploreBtn>
        </ExploreDealsWrapper>
        <CustomerService>
          <ServiceItems>
            <Img src={pinacolada} alt="pinacolada" />
            <Desc>
              <TitleInfo>Find new experiences</TitleInfo>
              <DescInfo>
                Follow your curiosity, feel the joy of real discoveries, and
                explore more of the world.
              </DescInfo>
            </Desc>
          </ServiceItems>
          <ServiceItems>
            <Img src={customerservice} alt="customerservice" />
            <Desc>
              <TitleInfo>We are here for you</TitleInfo>
              <DescInfo>
                Reach out to us 24/7 on any of our channels and we will respond
                (Monday - Sunday)
              </DescInfo>
            </Desc>
          </ServiceItems>
          <ServiceItems>
            <Img src={idcardpasa} alt="idcardpasa" />
            <Desc>
              <TitleInfo>Visa Assistance</TitleInfo>
              <DescInfo>
                An all inclusive VISA assistance all the way in a timely, secure
                and professional manner
              </DescInfo>
            </Desc>
          </ServiceItems>
        </CustomerService>
        <NewsWrapper>
          <Newsletter />
        </NewsWrapper>

        <Cheapflight />
      </Wrapper>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  position: relative;
`;
const HeroSection = styled.div`
  position: relative;
  height: auto;
  padding-bottom: 60px;
  width: 100%;
  background: url(${beach});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 147px;
    background: linear-gradient(180deg, #ffffff 0%, #ffffff00 100%) 0% 0%
      no-repeat padding-box;
  }
`;
const NewsWrapper = styled.div`
  width: 100%;
  margin: 100px auto;
  max-width: 1160px;
`;
const LocationTitle = styled.h2`
  color: #171b4a;
  text-align: center;
  font-size: 28px;
  padding-top: 70px;
  margin-bottom: 50px;
  z-index: 10;
  position: relative;
`;
const ExploreDealsWrapper = styled.div`
  width: 100%;
  margin: 100px auto;
  max-width: 1160px;
  padding: 0 20px;
`;
const Title = styled.h4`
  color: #171b4a;
  margin-bottom: 30px;
  font-size: 20px;
`;
const CardContainer = styled.div`
overflow: hidden;
height: 260px;
width: 100%;
`;
const CardHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-width: 1160px;
  width: 100%;
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
const CardWrapper = styled.div`
  width: 100%;
  height: 260px;
  background-position: center;
  background-size: cover;
  padding: 20px;
  position: relative;
  :hover {
    cursor: pointer;
    transition: all 600ms ease;
    transform: scale(1.05);
  }
`;
const FlightWrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
`;
const Flight = styled.p`font`;
const Date = styled.p``;

const SmallSection = styled.div`
  position: absolute;
  bottom: 40px;
  color: #fff;
`;
const Route = styled.h4``;
const Pricing = styled.div``;

const Hold = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  color: #fff;
  @media only screen and (max-width: 768px) {
    padding-right: 5px;
  }
`;

const Packages = styled.div``;
const Pack = styled.div``;
const Days = styled.p`
  background: #f4b232;
  padding: 10px;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
`;

const Cost = styled.div``;

const ExploreBtn = styled.button`
  border: none;
  outline: none;
  width: 223px;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 50px auto;
  cursor: pointer;
`;

const CustomerService = styled.div`
  width: 100%;
  margin: 100px auto;
  max-width: 1160px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0 20px;

  @media only screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
const ServiceItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Img = styled.img``;
const Desc = styled.div`
  /* margin-left: 20px; */
`;
const TitleInfo = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;
const DescInfo = styled.p`
  font-size: 14px;
`;

const PackgesWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px 20px;
  width: fit-content;
`;

const ContentWrapper = styled.label`
  display: flex;
  align-items: center;
`;
const Radio = styled.input``;
const Item = styled.label`
  color: #171b4a;
  font-weight: 500;
  margin: 0 8px;
`;

const ControlWrap = styled.div`
  margin: auto;
  display: grid;
  gap: 10px;
`;
