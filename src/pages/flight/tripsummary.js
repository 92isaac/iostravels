import Flightnavbar from "components/navigation/flightnavbar";
import Footer from "components/navigation/footer";
import Navbar from "components/navigation/navbar";
import React, { useState } from "react";
import styled from "styled-components";
import departureplane from "assets/icons/departureplane.svg";
import tooltip from "assets/icons/tooltip.png";
import Costcard from "components/universal/costcard";
import SinglePassenger from "components/universal/SinglePassenger";


function Tripsummary({ flightDetails, pageItem, changePage, backToPassenger }) {
  
const localData = JSON.parse(localStorage.getItem('passengerList'))
  const [activeTab, setActiveTab] = useState({ tag: 1, text: 'Make Payment' });
  

  // const handleTabClick = (tabIndex, tabText) => {
  //   setActiveTab({ tag: tabIndex, text: tabText });
  // };


  const timeFormat = (time) => {
    if (parseInt(time)) {
      const hours = Math.floor(time / 60);
      const hourText =
        hours === 1 ? `${hours} Hour` : hours > 1 ? `${hours} Hours` : "";
      const minutes = hours >= 1 ? Math.round(time % 60) : time;
      const minuteText =
        minutes === 1
          ? `${minutes} Minute`
          : minutes > 1
            ? `${minutes} Minutes`
            : "";
      return `${hourText}, ${minuteText}`;
    }
  };
  return (
    <>
      {/* <Navbar /> */}

      <Wrap>
        <WrapContent>Trip Summary</WrapContent>
      </Wrap>
      <FlightNav>
        <Flightnavbar />
      </FlightNav>
      <Wrapper>
        <SectionWrapper>
          <LeftSection>
            <Title>Lagos — Dubai</Title>
              <TopSection>
                <Itenary>Flight Itinerary</Itenary>
              </TopSection>
              {flightDetails.outbound.map((item, index) => (
                <div key={index}>
                  <CardWrapper>
                    <DepatureWrapper>
                      <DepatureImg src={departureplane} alt="departureplane" />
                      <DepaturetextWrapper>
                        <Dept>Departure Flight</Dept>
                        <Route>
                          {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                          —{" "}
                          {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                        </Route>
                      </DepaturetextWrapper>
                    </DepatureWrapper>
                    <FlightInfoWrappper>
                      <SectionOne>
                        <SmallTitle> {item.departureDate}</SmallTitle>
                        <SmallSectionImg
                          src={item.airlineDetails.logo}
                          alt={item.airlineDetails.name}
                        />
                      </SectionOne>
                      <SectionTwo>
                        <SmallTitle>
                          {item.departureTime} — {item.arrivalTime}
                        </SmallTitle>
                        <TextInfo>
                          {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                          —{" "}
                          {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                        </TextInfo>
                        <SmallTitle>
                          {item.airlineDetails.name}, {item.flightNumber}
                        </SmallTitle>

                      </SectionTwo>
                      <SectionThree>
                        <SmallTitle>
                          {timeFormat(flightDetails.totalDuration)}
                        </SmallTitle>
                        <TextInfo>{item.cabinType}</TextInfo>
                      </SectionThree>
                    </FlightInfoWrappper>
                  </CardWrapper>
                  <Layover>Layover at: Istanbul, Ataturk (IST)</Layover>
                </div>
              ))}
            <PassengerInfoWrapper>
              <PassTitleWrapper>
                <PassTitle>Passengers Information</PassTitle>
                <Details onClick={backToPassenger}>Edit Details</Details>
              </PassTitleWrapper>
              <div className=''>
                {localData.map((item, i) => (
                  <SinglePassenger key={i} user={item} />
                ))}
              </div>
            </PassengerInfoWrapper>
          </LeftSection>

          <RightSection>
            <Costcard
            flightDetails={flightDetails}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              changePage={changePage}
              pageItem={pageItem}
            />
          </RightSection>
        </SectionWrapper>
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export default Tripsummary;

const FlightNav = styled.div`
  background: #171b4a;
  padding: 20px;
  width: 100%;
`;
const Wrap = styled.div``;
const WrapContent = styled.div`
  margin: 0 auto;
  max-width: 1160px;
  padding: 20px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  background: #f4f8fa;
`;

const SectionWrapper = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
  @media only screen and (max-width: 840px) {
    grid-template-columns: 1fr;
  }
`;
const LeftSection = styled.div``;
const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 45px;
`;
const CardWrapper = styled.div`
  background: #fff;
  padding: 30px;
`;
const TopSection = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
`;
const Itenary = styled.h4`
  font-size: 18px;
`;
const DepatureWrapper = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
  display: flex;
`;
const DepatureImg = styled.img`
  margin-right: 10px;
`;
const DepaturetextWrapper = styled.div``;
const ReturnWrapper = styled.div`
  padding: 20px 0;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  display: flex;
`;
const Dept = styled.h4`
  font-size: 14px;
  color: #2e61e6;
`;
const Route = styled.h4``;
const FlightInfoWrappper = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;
const SectionOne = styled.div`
  @media only screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`;
const SmallTitle = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
`;
const SmallSectionImg = styled.img`
  width: 32px;
  height: 32px;
`;
const SectionTwo = styled.div`
  @media only screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 150px;
  margin-top: 5px;
`;
const Class = styled.p`
  font-size: 14px;
`;
const Seat = styled.p`
  font-size: 14px;
`;
const SectionThree = styled.div``;
const TextInfo = styled.p`
  font-size: 14px;
`;
const Layover = styled.div`
  background: #fef7ea;
  padding: 30px;
  font-size: 14px;
  font-weight: 600;
`;

const RightSection = styled.div``;

// PASSENGER INFORMATION

const PassengerInfoWrapper = styled.div`
  background: #fff;
  padding: 30px;
  margin: 40px 0;
`;

const PassTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 25px;
`;
const PassTitle = styled.h4`
  font-size: 18px;
`;
const Details = styled.h4`
  font-size: 14px;
  color: #2e61e6;
`;
const PassInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-top: 20px;
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
const PassContent = styled.div``;
const PassUser = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
`;
const PassInfo = styled.h4`
  font-size: 14px;
`;
