import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import plane from "assets/icons/plane.svg";
import downplane from "assets/icons/downplane.svg";
import spins from '../../assets/backgrounds/spins.gif'
import error from "assets/icons/error.svg";

function FlightOffer({ handleOpen, flightList, loadflight, flightError }) {
  // console.log(flightList)
  const cheaps = useRef()
  const currency = useRef()
  const earlytime = useRef()
  // console.log(flightList)

  const getEarliest = useCallback(() => {
    let early = []
    flightList?.map((item) => {
      item.outbound?.map((data) => {
        early.push(data.departureTime)
        early.sort((a, b) => a.departureTime - b.departureTime)
        return item
      })
      earlytime.current = early.slice(0, 1).toString()
      return false
    })
  }, [flightList])


  const getCheapest = useCallback(() => {
    // get cheapest amount
    let amtArr = []
    flightList?.map((item) => {
      currency.current = item.currency
      amtArr.push(item.amount)
      amtArr.sort((a, b) => a.amount - b.amount)
      return amtArr
    })
    cheaps.current = amtArr.slice(0, 1).toLocaleString()
  }, [cheaps, flightList])
  useEffect(() => {
    getCheapest()
    getEarliest()
  }, [getCheapest, getEarliest])
  return (
    <>
      <RightSecWrap>
        <TopNavWrapper>
          <div className='bg-white grid grid-cols-3'>
            <div className='cursor-pointer hover:border-b-4 p-4 hover:border-indigo-500 hover:text-indigo-500 focus:border-indigo-50 focus:text-indigo-500'>
              <div className='font-semibold'>Cheapest</div>
              <SmallInfo>From {currency.current} {cheaps.current}</SmallInfo>
            </div>
            <div className='cursor-pointer hover:border-b-4 p-4 hover:border-indigo-500 hover:text-indigo-500 focus:border-indigo-50 focus:text-indigo-500'>
              <div className='font-semibold'>Earliest</div>
              <div className='text-slate-500 text-sm'>{earlytime.current}</div>
            </div>
          </div>
          {/* <TopNavHold>
            <TopNav>
              <NavContent>
                <LinkTitle>Cheapest</LinkTitle>
                <SmallInfo>From ₦50,000,000.00</SmallInfo>
              </NavContent>
              <NavContent>
                <LinkTitle>Earliest</LinkTitle>
                <SmallInfo>₦50,000,000.00 09:26:00</SmallInfo>
              </NavContent>
            </TopNav>
          </TopNavHold> */}

          <ContentWrapper>
            {loadflight ?
              <div className='flex items-center justify-center mt-10'>
                <img alt={spins} src={spins} />
              </div> :
              Array.isArray(flightList) && flightList.length > 0 ? (
                <>
                  {flightList?.map((flight) => {
                    return (
                      <FlightContent key={flight.id}>
                        <LeftContent>
                          {/* Outbounds */}
                          {flight.outbound?.map((item, index) => {
                            return (
                              <FirstSection key={index}>
                                <SectionOne>
                                  <ImageWrapper>
                                    <Img
                                      src={item.airlineDetails.logo}
                                      alt={item.airlineDetails.name}
                                    />
                                    <Smdate>{item.departureDate}</Smdate>
                                  </ImageWrapper>
                                  <LocationWrapper>
                                    <Time>{item.departureTime}</Time>
                                    <Location>
                                      {item.airportFrom.city}
                                      <SubLocation>
                                        {item.airportFrom.name} (
                                        {item.airportFrom.airportCode})
                                      </SubLocation>
                                    </Location>
                                  </LocationWrapper>
                                </SectionOne>
                                <SectionTwo>
                                  <StopsWrapper>
                                    <Stops>{flight.outboundStops} Stops</Stops>
                                    {/* <Stops>2 Stops</Stops> */}
                                  </StopsWrapper>
                                  <StopsImg src={plane} />
                                  <Lay>Layover ~ 2h</Lay>
                                </SectionTwo>
                                <SectionThree>
                                  <LocationWrapper>
                                    <Time>{item.arrivalTime}</Time>
                                    <Location>
                                      {item.airportTo.city}
                                      <SubLocation>
                                        {item.airportTo.name} (
                                        {item.airportTo.airportCode})
                                      </SubLocation>
                                    </Location>
                                  </LocationWrapper>
                                </SectionThree>
                              </FirstSection>
                            );
                          })}
                          {/* <Separator>12 nights in Dubai</Separator> */}
                          {/* InBounds */}
                          {flight.inbound?.map((item, index) => (
                            <FirstSection key={index}>
                              <SectionOne>
                                <ImageWrapper>
                                  <Img
                                    src={item.airlineDetails.logo}
                                    alt={item.airlineDetails.name}
                                  />
                                  <Smdate>{item.departureDate}</Smdate>
                                </ImageWrapper>
                                <LocationWrapper>
                                  <Time>{item.departureTime}</Time>
                                  <Location>
                                    {item.airportFrom.city}
                                    <SubLocation>
                                      {`${item.airportFrom.name} (${item.airportFrom.airportCode})`}
                                    </SubLocation>
                                  </Location>
                                </LocationWrapper>
                              </SectionOne>
                              <SectionTwo>
                                <StopsWrapper>
                                  <Stops>{flight.outboundStops} Stops</Stops>
                                  {/* <Stops>2 Stops</Stops> */}
                                </StopsWrapper>
                                <StopsImg src={plane} />
                                <Lay>Layover ~ { }</Lay>
                              </SectionTwo>
                              <SectionThree>
                                <LocationWrapper>
                                  <Time>{item.departureTime}</Time>
                                  <Location>
                                    {item.airportTo.city}
                                    <SubLocation>
                                      {`${item.airportTo.name} (${item.airportTo.airportCode})`}
                                    </SubLocation>
                                  </Location>
                                </LocationWrapper>
                              </SectionThree>
                            </FirstSection>
                          ))}
                        </LeftContent>

                        <>
                          <RightContent>
                            <Amount>
                              {flight.currency}
                              {flight.amount.toLocaleString()}
                            </Amount>
                            <ViewBtn onClick={() => handleOpen(flight)}>
                              View
                            </ViewBtn>
                          </RightContent>
                        </>
                      </FlightContent>
                    );
                  })}
                </>
              ) : (
                <CardContent>
                  <CardImg src={error} />
                  <Note>Unavailable</Note>
                  <Info>
                    {flightError}
                  </Info>
                </CardContent>
              )}

            <MobileWrapper>
              {loadflight ?
              <div className='flex items-center justify-center mt-10'>
                <img alt={spins} src={spins} />
              </div> : Array.isArray(flightList) && flightList.length > 0 ? (
                <>
                  {" "}
                  {flightList?.map((flight) => (
                    <MobileHold key={flight.id}>
                      <FlightWrapper>
                        {flight.outbound?.map((item, index) => (
                          <FirstMobileWrapper key={index}>
                            <LeftItemWrap>
                              <Top>
                                <ImageWrapper>
                                  <Img
                                    src={item.airlineDetails.logo}
                                    alt={item.airlineDetails.name}
                                  />
                                  <Smdate>{item.departureDate}</Smdate>
                                </ImageWrapper>
                                <StopsImg src={downplane} />
                              </Top>
                              <Bottom></Bottom>
                            </LeftItemWrap>
                            <RightItemWrap>
                              <MobileSection>
                                <LocationWrapper>
                                  <Time>{item.departureTime}</Time>
                                  <Location>
                                    {item.airportFrom.city}
                                    <SubLocation>
                                      {item.airportFrom.name} (
                                      {item.airportFrom.airportCode})
                                    </SubLocation>
                                  </Location>
                                </LocationWrapper>
                              </MobileSection>
                              <SectionTwo>
                                <MobileStopsWrapper>
                                  <Stops>{flight.inboundStops} Stops</Stops>
                                </MobileStopsWrapper>
                                <MobileLay>Layover ~ 2h</MobileLay>
                              </SectionTwo>
                              <MobileSection>
                                <LocationWrapper>
                                  <Time>{item.arrivalTime}</Time>
                                  <Location>
                                    {item.airportFrom.city}
                                    <SubLocation>
                                      {item.airportFrom.name} (
                                      {item.airportFrom.airportCode})
                                    </SubLocation>
                                  </Location>
                                </LocationWrapper>
                              </MobileSection>
                            </RightItemWrap>
                          </FirstMobileWrapper>
                        ))}
                        {/* <MobileSeparator>12 nights in Dubai</MobileSeparator>{" "} */}
                        {flight.inbound?.map((item, index) => (
                          <FirstMobileWrapper key={index}>
                            <LeftItemWrap>
                              <Top>
                                <ImageWrapper>
                                  <Img
                                    src={item.airlineDetails.logo}
                                    alt={item.airlineDetails.name}
                                  />
                                  <Smdate>{item.departureDate}</Smdate>
                                </ImageWrapper>
                                <StopsImg src={downplane} />
                              </Top>
                              <Bottom></Bottom>
                            </LeftItemWrap>
                            <RightItemWrap>
                              <MobileSection>
                                <LocationWrapper>
                                  <Time>{item.departureTime}</Time>
                                  <Location>
                                    {item.airportFrom.city}
                                    <SubLocation>
                                      {item.airportFrom.name} (
                                      {item.airportFrom.airportCode})
                                    </SubLocation>
                                  </Location>
                                </LocationWrapper>
                              </MobileSection>
                              <SectionTwo>
                                <MobileStopsWrapper>
                                  <Stops>{flight.inboundStops}</Stops>
                                </MobileStopsWrapper>
                                <MobileLay>Layover ~ 2h</MobileLay>
                              </SectionTwo>
                              <MobileSection>
                                <LocationWrapper>
                                  <Time>{item.departureTime}</Time>
                                  <Location>
                                    {item.airportFrom.city}
                                    <SubLocation>
                                      {item.airportFrom.name} (
                                      {item.airportFrom.airportCode})
                                    </SubLocation>
                                  </Location>
                                </LocationWrapper>
                              </MobileSection>
                            </RightItemWrap>
                          </FirstMobileWrapper>
                        ))}
                      </FlightWrapper>
                      <PriceWrapper>
                        <CostWrapper>
                          <CostAmount>
                            {flight.currency}
                            {flight.amount.toLocaleString()}
                          </CostAmount>
                          <ViewBtn onClick={() => handleOpen(flight)}>
                            View
                          </ViewBtn>
                        </CostWrapper>
                      </PriceWrapper>
                    </MobileHold>
                  ))}
                </>
              ) : null}
            </MobileWrapper>
          </ContentWrapper>
        </TopNavWrapper>
      </RightSecWrap>
    </>
  );
}

export default FlightOffer;

const RightSecWrap = styled.div`
  /* padding: 0 20px; */
`;
const TopNavWrapper = styled.div``;
const CardContent = styled.div`
  background: #fff;
  padding: 50px 30px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CardImg = styled.img`
  margin-bottom: 30px;
`;
const Note = styled.h4`
  font-size: 14px;
`;
const Info = styled.div`
  font-size: 12px;
`;

// const TopNavHold = styled.div`
//   width: 100%;
// `;
// const TopNav = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   background: #fff;
//   padding: 20px;
//   width: 100%;
//   flex-wrap: wrap;

//   @media only screen and (max-width: 600px) {
//     gap: 10px;
//     justify-content: flex-start;
//   }
// `;
// const NavContent = styled.div`
//   display: block;
// `;
// const LinkTitle = styled.h4`
//   font-size: 14px;
// `;
const SmallInfo = styled.p`
  color: #797979;
  font-size: 12px;
`;

const ContentWrapper = styled.div`
  margin: 10px 0;
`;

const FlightContent = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 150px;
  margin: 20px 0;

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
const LeftContent = styled.div`
  border-right: 1px solid #e1e3e4;
  padding: 30px 20px;
  @media only screen and (max-width: 545px) {
    display: none;
  }
`;
const RightContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 20px;
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

const Amount = styled.h2`
  font-size: 18px;
  margin-bottom: 30px;
`;
const ViewBtn = styled.button`
  max-width: 159px;
  width: 100%;
  height: 54px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 14px;
  font-family: CircularStd-Bold;
  height: 54px;
  background: #2e61e6;
  border-radius: 27px;
  cursor: pointer;
`;

const FirstSection = styled.div`
  display: flex;
`;
const SectionOne = styled.div`
  display: flex;
  padding-right: 30px;
  width: 100%;
`;
const ImageWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
`;
const Smdate = styled.p`
  font-size: 11px;
`;
const LocationWrapper = styled.div`
  width: 100%;
`;
const Time = styled.h4`
  font-size: 14px;
`;
const Location = styled.p`
  font-size: 14px;
  font-family: CircularStd-Bold;
`;
const SubLocation = styled.span`
  color: #b4b5c4;
  padding-left: 2px;
`;
const SectionTwo = styled.div`
  padding-right: 30px;
  display: flex;
  flex-direction: column;
`;
const StopsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const MobileStopsWrapper = styled.div`
  display: flex;
  margin: 15px 0;
`;
const Stops = styled.div`
  width: 47px;
  height: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b4b5c4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-family: CircularStd-Bold;
`;
const StopsImg = styled.img`
  margin: 10px 0;
`;
const Lay = styled.p`
  font-size: 10px;
  text-align: center;
`;
const SectionThree = styled.div`
  width: 100%;
`;

const Separator = styled.p`
  text-align: center;
  margin: 50px 0;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0px;
    border: 3px dotted #eaeaea;
    width: 35%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 6px;
    right: 0px;
    border: 3px dotted #eaeaea;
    width: 35%;
  }

  @media only screen and (max-width: 996px) {
    ::after {
      content: "";
      position: absolute;
      top: 6px;
      left: 0px;
      border: 3px dotted #eaeaea;
      width: 34%;
    }
    ::before {
      content: "";
      position: absolute;
      top: 6px;
      right: 0px;
      border: 3px dotted #eaeaea;
      width: 34%;
    }
  }
`;

// mobile section--------------------------------
const MobileWrapper = styled.div`
  display: none;

  @media only screen and (max-width: 650px) {
    display: block;
  }
`;
const MobileHold = styled.div`
  background: #fff;
  padding: 20px 20px;
  margin: 20px 0;
`;

const FirstMobileWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;
const LeftItemWrap = styled.div``;
const RightItemWrap = styled.div``;
const Top = styled.div``;
const Bottom = styled.div``;

const MobileSection = styled.div`
  display: flex;
  padding-right: 30px;
  max-width: 200px;
  width: 100%;
`;
const MobileLay = styled.p`
  font-size: 10px;
  text-align: left;
  margin-bottom: 10px;
`;

const MobileSeparator = styled.div`
  text-align: center;
  margin: 10px 0;
  font-size: 12px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 0px;
    border: 3px dotted #eaeaea;
    width: 30%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 6px;
    right: 0px;
    border: 3px dotted #eaeaea;
    width: 30%;
  }
`;

const FlightWrapper = styled.div``;
const PriceWrapper = styled.div``;
const CostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-top: 2px solid #eaeaea;
  padding: 20px 0;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;
const CostAmount = styled.h4`
  font-size: 24px;
`;

const NoFlight = styled.div`
  display: block;
  margin: 20px auto;
  padding: 20px;
  font-size: 20px;
  text-align: center;
  color: #8e8e8e;
  border: 1px solid #8e8e8e;
  border-radius: 10px;
`;
